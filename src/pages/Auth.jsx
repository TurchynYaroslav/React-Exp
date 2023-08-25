import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

const Auth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <form
      onSubmit={login}
      className="w-25 "
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="John Troupe"
          required
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating mb-2">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Auth;
