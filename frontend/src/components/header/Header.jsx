import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav
        className={
          token
            ? "navbar navbar-expand-lg navbar-dark bg-primary"
            : "navbar navbar-expand-lg navbar-dark bg-dark"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand">{token ? "Logged-In" : "Logged-Out"}</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {token ? (
                <>
                  <li className="nav-item">
                    <NavLink as={Link} to="/dashboard" className="nav-link">
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      as={Link} to="/login"
                      className="nav-link"
                      onClick={() => {
                        localStorage.removeItem("token");
                      }}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink as={Link} to="/login" className="nav-link active">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink as={Link} to="/register" className="nav-link">
                      Signup
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
