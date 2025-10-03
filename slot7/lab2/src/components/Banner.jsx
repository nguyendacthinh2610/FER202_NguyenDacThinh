export default function Banner(){
  return (
    <div id="heroCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6719e7174371049.64a1859aaab5d.jpg"
            className="d-block w-100"
            alt="Pizza hero"
            style={{maxHeight:'420px', objectFit:'cover'}}
          />
        </div>
      </div>

      <div className="hero-overlay">
        <div>
          <h2 className="display-6 fw-bold">Neapolitan Pizza</h2>
          <p className="lead">If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
        </div>
      </div>
    </div>
  );
}
