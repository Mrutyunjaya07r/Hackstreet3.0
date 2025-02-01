import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('SIH2024');

  const logOut = () => {
    localStorage.removeItem('SIH2024');
    navigate('/signin');
  };

  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">
          <img src="logo1.jpg" alt="Logo" className="logo" style={{ height: '50px' }} />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post">Give Suggestion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/showpost">Show Suggestion</Link>
            </li>
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">SignUp</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">SignIn</Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/chatbot">Chat Bot</Link>
            </li>
          </ul>

          {isLoggedIn && (
            <button className="btn btn-outline-light ms-3" onClick={logOut}>Logout</button>
          )}
        </div>
      </nav>

      {/* Categories Section */}
      <div className="container text-center mt-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-primary text-white p-4">
              <h3>Kids Learning</h3>
              <img src="https://cdn9.dissolve.com/p/D985_22_943/D985_22_943_1200.jpg" style={{height:"300px"}} alt="" />
              <Link to="/kidslearning" className="btn btn-light mt-2">Explore</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-success text-white p-4">
              <h3>Adults Learning</h3>
              <img src="https://www.myspiritualgiftstest.com/media/10-jpg.webp" style={{height:"300px"}} alt="" />
              <Link to="/adults" className="btn btn-light mt-2">Explore</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
