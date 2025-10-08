// src/pages/HomePage.jsx
import React from "react";
import HomeCarousel from "../components/Carousel/HomeCarousel";
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies';

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      {/* Bạn có thể thêm các section tiếp theo của trang Home ở dưới */}
      <Container className="mt-4">
        <h4>Featured Movies Collections</h4>
        <p className="text-secondary">
          Dưới đây là một số anime nổi tiếng (Suzume, JJK Movie 0, Your Name) được tuyển chọn để bạn tham khảo.
        </p>

        <section className="mt-3">
          <Row className="g-3">
            {movies.map(movie => (
              <Col key={movie.id} xs={12} sm={6} md={4}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

