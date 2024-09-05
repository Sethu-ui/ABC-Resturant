import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{
        backgroundColor: '#1A202C', // Darker shade for a modern look
        borderRadius: '0 0 15px 15px',
      }}
    >
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center" onClick={() => handleClick('/')}>
          <Link to="/" className="d-flex align-items-center">
            <img src={logo} alt="logo" height="30" style={{ marginRight: '10px' }} />
            <img src={logoDark} alt="dark logo" height="30" className="d-none" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            borderColor: '#2D3748',
            color: '#fff',
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {['Products', 'Services', 'Offers', 'About Us'].map((item, index) => (
              <li className="nav-item" key={index}>
                <button
                  onClick={() => handleClick(`/${item.toLowerCase().replace(' ', '-')}`)}
                  className="btn btn-link text-white text-uppercase fw-bold px-3 py-2 m-2"
                  style={{
                    position: 'relative',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    color: '#CBD5E0', // Soft white-grey for text
                    transition: 'color 0.3s ease-in-out',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#A0AEC0'; // Light grey on hover
                    e.currentTarget.style.cursor = 'pointer';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#CBD5E0';
                  }}
                >
                  {item}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-3px', // Positioned just below the text
                      left: '50%',
                      width: '0',
                      height: '2px',
                      backgroundColor: '#4FD1C5', // Teal accent for underline
                      transition: 'all 0.3s ease-in-out',
                      transform: 'translateX(-50%)',
                    }}
                    className="nav-underline"
                  />
                </button>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                onClick={() => handleClick('/login')}
                className="btn btn-sm rounded-pill px-3 py-2 shadow-sm"
                style={{
                  backgroundColor: '#4FD1C5', // Teal background for contrast
                  color: '#1A202C', // Dark text for readability
                  border: 'none',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s ease-in-out',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#38B2AC'; // Darker teal on hover
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#4FD1C5';
                }}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
