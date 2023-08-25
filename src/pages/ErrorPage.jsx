import React from "react";
import { Link } from "react-router-dom";
import "../styles/ErrorStyle.css";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p className="p-error">
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <Link to="/posts">
          <button className="button-error">
            Back to home <i className="far fa-hand-point-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
