import { Link } from 'react-router-dom';


const Navbar = () => {
  return(
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link active">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">About us</Link>
          </li>
          <li class="nav-item">
            <Link to="/works" class="nav-link">Our Works</Link>
          </li>
        </ul>
        <button type="button" class="btn btn-dark">Dark Mode</button>
      </div>
    </div>
  </nav>
  )
};

export default Navbar;