import React, { useMemo, useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { MovieProvider } from '../contexts/MovieContext';
import { useMovieState } from '../contexts/MovieContext';
import { useAuth } from '../contexts/AuthContext';
import MovieForm from '../components/MovieForm';
import MovieTable from '../components/MovieTable';
import FilterBar from '../components/FilterBar';

const MovieManagerContent = () => {
  const { movies, genres } = useMovieState();
  const { user } = useAuth();
  const [filters, setFilters] = useState({ q: '', genreId: '', durationMin: '', durationMax: '', sort: 'title-asc' });
  const [showWelcome, setShowWelcome] = useState(true);

  // Ẩn thông báo chào sau 3 giây
  useEffect(() => {
    if (showWelcome) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  const filteredMovies = useMemo(() => {
    let list = [...movies];
    const q = (filters.q || '').toLowerCase();
    if (q) {
      list = list.filter((m) => m.title?.toLowerCase().includes(q));
    }
    if (filters.genreId) {
      const gid = parseInt(filters.genreId, 10);
      list = list.filter((m) => parseInt(m.genreId, 10) === gid);
    }
    if (filters.durationMin) {
      const min = parseInt(filters.durationMin, 10) || 0;
      list = list.filter((m) => (parseInt(m.duration, 10) || 0) >= min);
    }
    if (filters.durationMax) {
      const max = parseInt(filters.durationMax, 10);
      if (!Number.isNaN(max)) {
        list = list.filter((m) => (parseInt(m.duration, 10) || 0) <= max);
      }
    }
    // normalize avatar from poster if needed
    list = list.map((m) => ({ ...m, avatar: m.avatar || m.poster }));
    // sort
    const [field, dir] = (filters.sort || 'title-asc').split('-');
    list.sort((a, b) => {
      const av = (a[field] || '').toString().toLowerCase();
      const bv = (b[field] || '').toString().toLowerCase();
      if (av < bv) return dir === 'asc' ? -1 : 1;
      if (av > bv) return dir === 'asc' ? 1 : -1;
      return 0;
    });
    return list;
  }, [movies, filters]);

  return (
    <Container className="mt-5">
      {showWelcome && user?.name && (
        <Alert variant="success" onClose={() => setShowWelcome(false)} dismissible>
          Xin chào, <strong>{user.name}</strong>!
        </Alert>
      )}
      <h1 className="text-center mb-4">🎬 Quản lý Phim (Context + useReducer + Axios)</h1>

      <MovieForm />

      <h2 className="mt-4">Danh sách Phim</h2>
      <div className="mb-3">
        <FilterBar genres={genres} onChange={setFilters} />
      </div>
      <MovieTable movies={filteredMovies} />
    </Container>
  );
};

const MovieManager = () => (
  <MovieProvider>
    <MovieManagerContent />
  </MovieProvider>
);

export default MovieManager;
