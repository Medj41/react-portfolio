import "../Navbar/style.css"
export default function Navbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg bgNavFoot">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Portfolio Website</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="#work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>






      {/* <NavLink
        to="/"
        classNameName={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        portofolio
      </NavLink> */}


    </>
  );
}
