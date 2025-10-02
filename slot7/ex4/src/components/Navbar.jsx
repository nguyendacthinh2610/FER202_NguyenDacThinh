export default function Navbar() {
  return (
    <nav className="bg-orange">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-white" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
