import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useLocation } from "react-router-dom";
import PostFilter from "./PostFilter";
import { AuthContext } from "../context/auth";
import { publicRoutes, priveteRoutes } from "../router/routers";

const MyNavbar = ({ filter, setFilter }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  let pages;
  if (isAuth) {
    pages = priveteRoutes;
  } else {
    pages = publicRoutes;
  }
  const pathname = useLocation();
  const logout = () => {
    setIsAuth(false);
    localStorage.clear("auth");
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary w-100 p-2"
      data-bs-theme="light"
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          NehXby
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {pages.map((p) => (
              <li className="nav-item" key={p.path}>
                <Link
                  className={`nav-link ${
                    p.path === pathname.pathname ? "active" : ""
                  }`}
                  to={p.path}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <PostFilter filter={filter} setFilter={setFilter} />
        </div>
        {isAuth ? (
          <img
            style={{ cursor: "pointer" }}
            className="ms-2"
            width="38"
            height="38"
            src="https://img.icons8.com/?size=1x&id=7dYKZJzrXwIz&format=png"
            alt="undefined"
            onClick={logout}
          />
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default MyNavbar;
