import React, { useContext } from "react";
import ErrorPage from "../pages/ErrorPage";
import Posts from "../pages/Posts";

import Auth from "../pages/Auth";
import { Navigate, Route, Routes } from "react-router-dom";
import PostIdPage from "../pages/PostIdPage";
import { publicRoutes, priveteRoutes } from "../router/routers";
import { AuthContext } from "../context/auth";
import MyLoader from "./UI/Loader/MyLoader";

const AppRouter = ({ filter, setFilter }) => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <MyLoader />;
  }
  return isAuth ? (
    <Routes>
      {priveteRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.path === "/*" ? (
              <Navigate to="/posts" replace />
            ) : route.path === "/posts" || route.path === "/posts2" ? (
              <route.component filter={filter} setFilter={setFilter} />
            ) : (
              <route.component />
            )
          }
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.path === "/*" ? (
              <Navigate to="/auth" replace />
            ) : (
              <route.component />
            )
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
