// src/pages/HomePage.jsx
import React, { useState } from "react";
import HomeCarousel from "../components/Home/HomeCarousel";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';
import Filter from '../components/Filter';
import NavBar from '../components/NavBar';
import MovieDetailModal from '../components/MovieDetailModal';

export default function HomePage() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const handleDetail = (movie) => {
    setSelectedMovie(movie);
    setShowDetail(true);
  };
  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedMovie(null);
  };
  const handleAddFavourite = (movie) => {
    if (!favourites.some(f => f.id === movie.id)) {
      setFavourites([...favourites, movie]);
      setNotificationText(`Đã thêm "${movie.title}" vào danh sách yêu thích!`);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 1800);
    } else {
      setNotificationText(`Phim "${movie.title}" đã có trong danh sách yêu thích!`);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 1800);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <div className="container mt-4">
        <Filter />
      </div>
      {showNotification && (
        <div style={{
          position: "fixed",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#222",
          color: "#fff",
          padding: "12px 32px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          zIndex: 9999,
          fontSize: "1rem",
          fontWeight: "500",
          letterSpacing: "0.5px"
        }}>
          {notificationText}
        </div>
      )}
      <HomeCarousel />
      <Container className="mt-4">
        <h4>Featured Movies Collections</h4>
        <p className="text-secondary">
          Dưới đây là một số anime nổi tiếng (Suzume, JJK Movie 0, Your Name) được tuyển chọn để bạn tham khảo.
        </p>
        <section className="mt-3">
          <Row className="g-3">
            {movies.map(movie => (
              <Col key={movie.id} xs={12} sm={6} md={4}>
                <MovieCard
                  poster={movie.poster}
                  title={movie.title}
                  description={movie.description}
                  genre={movie.genre}
                  year={movie.year}
                  country={movie.country}
                  duration={movie.duration}
                  onDetail={() => handleDetail(movie)}
                  onAddFavourite={() => handleAddFavourite(movie)}
                />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
      <MovieDetailModal show={showDetail} handleClose={handleCloseDetail} movie={selectedMovie} />
      {/* Hiển thị danh sách phim yêu thích nếu có */}
      {/* Favourite Movies chỉ hiển thị ở tab riêng hoặc trang riêng, không hiển thị cùng danh sách chính */}
    </div>
  );
}

