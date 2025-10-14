import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import "./MovieCard.css";

export default function MovieCard({ poster, title, description, genre, year, country, duration, onDetail, onAddFavourite }) {
  return (
    <Card style={{ width: '100%', minHeight: '100%' }} className="movie-card h-100 d-flex flex-column">
      <Card.Img variant="top" src={poster} alt={title} style={{ height: '220px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="mb-2" style={{ flex: '1 1 auto' }}>
          {description}
        </Card.Text>
        <div><strong>Genre:</strong> {genre}</div>
        <div><strong>Year:</strong> {year}</div>
        <div><strong>Country:</strong> {country}</div>
        <div><strong>Duration:</strong> {duration} min</div>
        <div className="mt-auto d-flex justify-content-between">
          <Button variant="primary" onClick={onDetail}>Details</Button>
          <Button variant="outline-warning" size="sm" onClick={onAddFavourite}>Add to Favourite</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
