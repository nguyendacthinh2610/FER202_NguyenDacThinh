import React from "react";
import {
  Table,
  Button,
  Image,
  Modal,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useMovieState, useMovieDispatch } from "../contexts/MovieContext";

const MovieTable = ({ movies: moviesOverride }) => {
  const state = useMovieState();
  const { dispatch, confirmDelete } = useMovieDispatch();

  const {
    movies,
    genres,
    loading,
    movieToDelete,
    showDeleteModal,
    currentDetailMovie,
    showDetailModal,
  } = state;

  const genreMap = genres.reduce((map, genre) => {
    map[genre.id] = genre.name;
    return map;
  }, {});

  const handleEditClick = (movie) => {
    dispatch({ type: "OPEN_EDIT_MODAL", payload: movie });
  };

  const handleDeleteClick = (movie) => {
    dispatch({ type: "OPEN_DELETE_MODAL", payload: movie });
  };

  const handleDetailClick = (movie) => {
    dispatch({ type: "OPEN_DETAIL_MODAL", payload: movie });
  };

  const fallbackAvatar =
    "https://via.placeholder.com/50x50?text=No+Img";

  return (
    <>
      {loading && (moviesOverride ? moviesOverride.length === 0 : movies.length === 0) ? (
        <div className="text-center my-4">
          <Spinner
            animation="border"
            role="status"
            variant="primary"
            className="me-2"
          />
          <Alert variant="info" className="mt-3">
            Đang tải dữ liệu phim...
          </Alert>
        </div>
      ) : (
        <Table striped bordered hover responsive className="mt-4">
          <thead className="table-light align-middle text-center">
            <tr>
              <th style={{ width: "80px" }}>Avatar</th>
              <th style={{ width: "60px" }}>ID</th>
              <th style={{ minWidth: "220px" }}>Tên Phim</th>
              <th style={{ width: "140px" }}>Danh mục</th>
              <th style={{ width: "140px" }}>Thời lượng (phút)</th>
              <th style={{ width: "180px" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {(moviesOverride || movies).map((movie) => {
              const genreName = genreMap[movie.genreId] || "Unknown";
              return (
                <tr key={movie.id}>
                  {/* Avatar */}
                  <td className="text-center">
                    <Image
                      src={movie.avatar || fallbackAvatar}
                      alt={movie.title}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      rounded
                    />
                  </td>

                  {/* ID */}
                  <td className="text-center">
                    #{movie.id}
                  </td>

                  {/* Tên phim + năm */}
                  <td>
                    <div style={{ fontWeight: 600 }}>
                      {movie.title}
                    </div>
                    <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                      ({movie.year})
                    </div>
                  </td>

                  {/* Thể loại */}
                  <td className="text-center">{genreName}</td>

                  {/* Thời lượng */}
                  <td className="text-center">
                    {movie.duration} phút
                  </td>

                  {/* Action buttons */}
                  <td className="text-center">
                    <div className="d-flex gap-2 justify-content-center">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleEditClick(movie)}
                      >
                        Sửa
                      </Button>
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() => handleDetailClick(movie)}
                      >
                        Chi tiết
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(movie)}
                      >
                        Xóa
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      {/* Modal Xác nhận Xóa */}
      <Modal
        show={showDeleteModal}
        onHide={() => dispatch({ type: "CLOSE_DELETE_MODAL" })}
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận Xóa Phim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa phim{" "}
          <strong>"{movieToDelete?.title}"</strong> (ID:{" "}
          {movieToDelete?.id}) không?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "CLOSE_DELETE_MODAL" })}
          >
            Hủy bỏ
          </Button>
          <Button
            variant="danger"
            onClick={() => confirmDelete(movieToDelete.id)}
          >
            Xác nhận Xóa
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Chi Tiết Phim */}
      <Modal
        show={showDetailModal}
        onHide={() => dispatch({ type: "CLOSE_DETAIL_MODAL" })}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Chi Tiết Phim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentDetailMovie ? (
            <div>
              <div className="text-center mb-3">
                <Image
                  src={currentDetailMovie.avatar || "https://via.placeholder.com/200x300?text=No+Img"}
                  alt={currentDetailMovie.title}
                  style={{ maxWidth: "200px", maxHeight: "300px", objectFit: "cover" }}
                  rounded
                />
              </div>
              <div className="mb-2">
                <strong>Tên Phim:</strong> {currentDetailMovie.title}
              </div>
              <div className="mb-2">
                <strong>ID:</strong> {currentDetailMovie.id}
              </div>
              <div className="mb-2">
                <strong>Mô tả:</strong> {currentDetailMovie.description}
              </div>
              <div className="mb-2">
                <strong>Thể loại:</strong> {genreMap[currentDetailMovie.genreId] || "Unknown"}
              </div>
              <div className="mb-2">
                <strong>Năm:</strong> {currentDetailMovie.year}
              </div>
              <div className="mb-2">
                <strong>Thời lượng:</strong> {currentDetailMovie.duration} phút
              </div>
              <div className="mb-2">
                <strong>Quốc gia:</strong> {currentDetailMovie.country}
              </div>
            </div>
          ) : (
            <p>Không có dữ liệu</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "CLOSE_DETAIL_MODAL" })}
          >
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieTable;
