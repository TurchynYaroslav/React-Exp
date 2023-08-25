import Auth from "../pages/Auth";
import ErrorPage from "../pages/ErrorPage";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Posts2 from "../pages/Posts2";

export const priveteRoutes = [
  { path: "/posts", component: Posts, name: "Posts" },
  { path: "/posts2", component: Posts2, name: "Posts2" },
  { path: "/posts/:id", component: PostIdPage, name: "" },
  { path: "/*", component: ErrorPage, name: "" },
];

export const publicRoutes = [
  { path: "/auth", component: Auth, name: "Auth" },
  { path: "/*", component: Auth },
];
