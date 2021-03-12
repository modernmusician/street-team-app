import React from 'react';
import { Link } from '@reach/router';
import { FaAngleRight } from 'react-icons/fa';

function ArtistNavbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-row">
        <div className="navbar-block-left">
          <div className="navbar-image-box">
            <img
              src="../mm_square_bright.png"
              className="navbar-image"
              alt="modern music logo"
            />
          </div>
          <div className="navbar-right-divider">
            {' '}
            <FaAngleRight />{' '}
          </div>
          <div>
            {' '}
            <p className="navbar-contest-title"> Create a Contest </p>{' '}
          </div>
        </div>
        <div className="navbar-block-right">
          <Link className="link-button" to="/login">
            <div className="navbar-item">
              {' '}
              <p className="navbar-contest-title"> Logout </p>{' '}
            </div>
          </Link>
          <div className="navbar-item">
            {' '}
            <img
              src="../mj_lights.png"
              className="navbar-image"
              alt="artist-logo"
            />{' '}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ArtistNavbar;
