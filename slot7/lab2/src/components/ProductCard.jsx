export default function ProductCard({ title, img, oldPrice, price, flag }) {
  return (
    <div className="card menu-card position-relative h-100">
      {flag && <span className="badge-flag">{flag}</span>}
      <img src={img} className="card-img-top" alt={title} style={{height:'180px', objectFit:'cover'}} />
      <div className="card-body">
        <h5 className="card-title mb-2">{title}</h5>
        <div className="mb-3">
          {oldPrice && <span className="old-price">${oldPrice}</span>}
          <span className="new-price">${price}</span>
        </div>
        <button className="btn btn-dark w-100 text-white fw-bold">Buy</button>

      </div>
    </div>
  );
}
