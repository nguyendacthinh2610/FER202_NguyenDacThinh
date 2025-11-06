import React, {
    createContext,
    useReducer,
    useContext,
    useEffect,
    useCallback,
  } from 'react';
  
  import { movieReducer, initialMovieState } from '../reducers/movieReducers';
  import movieApi from '../api/movieApi';
  
  // tạo 2 context: 1 cho state, 1 cho action
  export const MovieStateContext = createContext(initialMovieState);
  export const MovieDispatchContext = createContext(null);
  
  // custom hooks cho tiện
  export const useMovieState = () => useContext(MovieStateContext);
  export const useMovieDispatch = () => useContext(MovieDispatchContext);
  
  export const MovieProvider = ({ children }) => {
    const [state, dispatch] = useReducer(movieReducer, initialMovieState);
  
    // READ /movies
    const fetchMovies = useCallback(async () => {
      dispatch({ type: 'START_LOADING' });
      try {
        const response = await movieApi.get('/movies');
        const data = Array.isArray(response.data) ? response.data : [];
        // Normalize to ensure avatar is available (fallback to poster)
        const normalized = data.map((m) => ({ ...m, avatar: m.avatar || m.poster }));
        dispatch({ type: 'SET_MOVIES', payload: normalized });
      } catch (err) {
        console.error('Lỗi khi tải danh sách phim:', err);
        dispatch({ type: 'SET_MOVIES', payload: [] });
      }
    }, [dispatch]);
  
    // READ /genres
    const fetchGenres = useCallback(async () => {
      try {
        const response = await movieApi.get('/genres');
        dispatch({ type: 'SET_GENRES', payload: response.data });
      } catch (err) {
        console.error('Lỗi khi tải thể loại:', err);
        dispatch({ type: 'SET_GENRES', payload: [] });
      }
    }, [dispatch]);
  
    // DELETE
    const confirmDelete = useCallback(
      async (id) => {
        dispatch({ type: 'CLOSE_DELETE_MODAL' });
        dispatch({ type: 'START_LOADING' });
  
        try {
          await movieApi.delete(`/movies/${id}`);
          fetchMovies(); // reload sau khi xóa
        } catch (err) {
          console.error('Lỗi khi xóa phim:', err);
          fetchMovies(); // vẫn reload để đồng bộ
        }
      },
      [fetchMovies]
    );
  
    // CREATE / UPDATE
    const handleCreateOrUpdate = useCallback(
      async (dataToSend, isEditing, isEditingId) => {
        dispatch({ type: 'START_LOADING' });
  
        try {
          const payload = { ...dataToSend, poster: dataToSend.avatar || dataToSend.poster };
          // Nếu tạo mới: tự tính ID tiếp theo dựa trên danh sách hiện có để đảm bảo đúng thứ tự
          if (!isEditing) {
            const ids = (state.movies || [])
              .map((m) => m?.id)
              .filter((id) => id !== undefined && id !== null)
              .map((id) => (typeof id === 'number' ? id : parseInt(id, 10)))
              .filter((n) => !Number.isNaN(n));
            const nextId = (ids.length ? Math.max(...ids) : 0) + 1;
            const sampleId = state.movies && state.movies[0] ? state.movies[0].id : null;
            payload.id = typeof sampleId === 'string' ? String(nextId) : nextId;
          }
          if (isEditing) {
            // PUT: sửa toàn bộ record
            await movieApi.put(`/movies/${isEditingId}`, payload);
          } else {
            // POST: thêm mới
            await movieApi.post('/movies', payload);
          }
  
          dispatch({ type: 'RESET_FORM' });
          fetchMovies();
          return true;
        } catch (err) {
          console.error('Lỗi CREATE/UPDATE:', err);
          fetchMovies();
          return false;
        }
      },
      [fetchMovies, state.movies]
    );
    
  
    // load initial data khi app mount
    useEffect(() => {
      fetchMovies();
      fetchGenres();
    }, [fetchMovies, fetchGenres]);
  
    const dispatchValue = {
      dispatch,
      fetchMovies,
      fetchGenres,
      confirmDelete,
      handleCreateOrUpdate,
    };
  
    return (
      <MovieStateContext.Provider value={state}>
        <MovieDispatchContext.Provider value={dispatchValue}>
          {children}
        </MovieDispatchContext.Provider>
      </MovieStateContext.Provider>
    );
  };
  