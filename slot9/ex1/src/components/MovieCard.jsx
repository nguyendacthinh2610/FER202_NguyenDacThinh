import React, { useEffect, useState } from 'react';
import { Card, Button, Badge, Modal, Toast } from 'react-bootstrap';
import './MovieCard.css';

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('favourites');
      setFavourites(raw ? JSON.parse(raw) : []);
    } catch (e) {
      setFavourites([]);
    }
  }, []);

  const saveFavourites = (next) => {
    localStorage.setItem('favourites', JSON.stringify(next));
    setFavourites(next);
  };

  const handleAddFavourite = () => {
    const exists = favourites.find((f) => f.id === movie.id);
    if (!exists) {
      const updated = [...favourites, movie];
      saveFavourites(updated);
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  };

  const truncate = (text, n = 120) => {
    if (!text) return '';
    return text.length > n ? text.slice(0, n).trim() + '…' : text;
  };

  return (
    <>
      <Card className="h-100 shadow-sm movie-card anime-card">
        <div className="movie-poster">
          <img src={movie.poster} alt={`${movie.title} poster`} className="poster-img" />
          <div className="poster-overlay">
            <div className="poster-title">{movie.title}</div>
            <div className="poster-sub">{movie.year} • {movie.country}</div>
          </div>
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Text className="movie-desc" style={{ flex: 1 }}>{truncate(movie.description, 140)}</Card.Text>

          <div className="mb-2">
            <Badge bg="light" text="dark" className="me-1 country-badge">{movie.country}</Badge>
            <Badge bg="light" text="dark" className="me-1 duration-badge">{movie.duration} min</Badge>
            <Badge bg="light" text="dark" className="me-1 year-badge">{movie.year}</Badge>
            {(Array.isArray(movie.genre) ? movie.genre : [movie.genre || 'Unknown']).map((g, i) => (
              <Badge bg="light" text="dark" className="me-1 genre-badge genre-pill" key={i}>{g}</Badge>
            ))}
          </div>

          <div className="d-flex gap-2 mt-2">
            <Button className="fav-btn" size="sm" onClick={handleAddFavourite}>❤ Add</Button>
            <Button variant="outline-primary" size="sm" onClick={() => setShowModal(true)}>Details</Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title} ({movie.year})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column flex-md-row gap-3">
            <div style={{ flex: '0 0 40%' }}>
              <img src={movie.poster} alt={`${movie.title} poster`} className="img-fluid rounded" />
            </div>
            <div style={{ flex: 1 }}>
              <h6>Description</h6>
              <p>{movie.description}</p>

              <h6>Showtimes</h6>
              {movie.showtimes && movie.showtimes.length > 0 ? (
                <ul>
                  {movie.showtimes.map((s, idx) => <li key={idx}>{s}</li>)}
                </ul>
              ) : <p className="text-muted">No showtimes available.</p>}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Toast show={showToast} onClose={() => setShowToast(false)} bg="success" className="fav-toast">
        <Toast.Body className="text-white">Added to favourites!</Toast.Body>
      </Toast>
    </>
  );
}
