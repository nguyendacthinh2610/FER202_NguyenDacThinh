export default function TopBar() {
  return (
    <div className="topbar py-2">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
          <img         src="https://upload.wikimedia.org/wikipedia/vi/thumb/2/2d/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg/1200px-Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_FPT.svg.png" 
 alt="FPT" style={{height: 28}} />
          <nav className="small d-none d-md-flex gap-3">
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-house-door me-1" />Trang chủ
            </a>
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-journal-text me-1" />Ngành học
            </a>
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-megaphone me-1" />Tuyển sinh
            </a>
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-people me-1" />Sinh viên
            </a>
          </nav>
        </div>

        <form className="d-flex align-items-center gap-2">
          <label htmlFor="kw" className="small mb-0">Search:</label>
          <input id="kw" className="form-control form-control-sm" style={{width: 180}} />
        </form>
      </div>
    </div>
  );
}
