import "../CSS/Header.css";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link className="headlink" to="/buy">
        <p className="headertop">Portrait.Co</p>
      </Link>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/buy">
                  Buy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sell">
                  Add Pictures
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="/cart"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://imgs.search.brave.com/Y3qcPwMIEjDEoeqWtf9bHpGv_AjPhldtm_D1cMXX2e4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MzQzNzkxMy9waG90/by9vbmxpbmUtc2hv/cHBpbmctY2FydC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cVk1WDJoMmtrcTZm/WnpISnB5U3IyQjZ0/OG02RXFKZG5DTFd4/b09YYWJlRT0"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <hr />
    </>
  );
};
