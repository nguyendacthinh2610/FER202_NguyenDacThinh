export default function Footer() {
  return (
    <footer className="footer-orange text-white mt-4">
      <div className="container py-4">
        <div className="row g-3 align-items-center">
          <div className="col-12 col-md-6">
            <h6 className="mb-2">Our Address</h6>
            <div className="small">
              Khu đô thị FPT Đà Nẵng<br/>
              <i className="bi bi-telephone me-1" /> 0849311111<br/>
              <i className="bi bi-telephone me-1" /> +852 6735 4321<br/>
              <i className="bi bi-envelope me-1" /> fptedu@fpt.edu.vn
            </div>
          </div>
          <div className="col-12 col-md-6">
  <div className="d-flex justify-content-md-end align-items-center gap-3 footer-logos">
    <a href="https://www.google.com" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" alt="Google" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" alt="Facebook" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitter.svg" alt="Twitter" />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noreferrer">
      <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg" alt="YouTube" />
    </a>
    <a href="mailto:fptedu@fpt.edu.vn">
      <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope.svg" alt="Email" />
    </a>
  </div>
</div>
        </div>
      </div>

      <div className="footer-copy text-center small py-2">
        © Copyright 2023
      </div>
    </footer>
  );
}
