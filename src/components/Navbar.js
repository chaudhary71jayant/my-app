
import PropTypes from 'prop-types';
import './FormSnippet.css';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/
    "
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#
    navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className={`form-check form-switch my-3 text-${props.mode === 'light'?'black':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
              <label className="form-check-label" htmlFor="switchCheckDefault">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title : 'Add a title here',
    about : 'Add about us here'
};


