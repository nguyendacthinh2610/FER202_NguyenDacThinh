export default function Grid() {
  return (
    <div className="container my-4">
      {/* Row 1: 2 cột bằng nhau */}
      <div className="row g-2 mb-2">
        <div className="col-12 col-md-6"><div className="box">First col</div></div>
        <div className="col-12 col-md-6"><div className="box">Second col</div></div>
      </div>

      {/* Row 2: 3 cột */}
      <div className="row g-2 mb-2">
        <div className="col-12 col-md-4"><div className="box">col</div></div>
        <div className="col-12 col-md-4"><div className="box">col</div></div>
        <div className="col-12 col-md-4"><div className="box">col</div></div>
      </div>

      {/* Row 3: 4 cột */}
      <div className="row g-2">
        <div className="col-12 col-md-3"><div className="box">col</div></div>
        <div className="col-12 col-md-3"><div className="box">col</div></div>
        <div className="col-12 col-md-3"><div className="box">col</div></div>
        <div className="col-12 col-md-3"><div className="box">col</div></div>
      </div>
    </div>
  );
}
