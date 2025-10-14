import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function MovieDetailModal({ show, handleClose, movie }) {
  if (!movie) return null;
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={movie.poster} alt={movie.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
        <p><strong>Description:</strong> {movie.description}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Country:</strong> {movie.country}</p>
        <p><strong>Duration:</strong> {movie.duration} min</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
