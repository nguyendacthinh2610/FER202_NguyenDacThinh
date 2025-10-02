export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Pizza House</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-3">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>

          <form className="d-flex ms-auto" role="search">
            <input className="form-control" type="search" placeholder="Search" />
            <button className="btn btn-danger btn-search" type="submit">
              <i className="bi bi-search"></i>
              <span className="d-none d-sm-inline ms-1"></span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
