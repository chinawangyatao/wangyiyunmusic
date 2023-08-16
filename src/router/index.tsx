import { Navigate, RouteObject } from "react-router-dom";
import React, { lazy } from "react";
const Discover = lazy(() => import("@/views/discover"));
const Download = lazy(() => import("@/views/download/index"));
const Focus = lazy(() => import("@/views/focus/index"));
const Mine = lazy(() => import("@/views/mine/index"));
const Album = lazy(() => import("@/views/album/index"));
const Artist = lazy(() => import("@/views/artist/index"));
const Djradio = lazy(() => import("@/views/djradio/index"));
const Ranking = lazy(() => import("@/views/ranking/index"));
const Recommend = lazy(() => import("@/views/recommend/index"));
const Songs = lazy(() => import("@/views/songs/index"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/discover"} />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      { path: "/discover/album", element: <Album /> },
      { path: "/discover/artist", element: <Artist /> },
      { path: "/discover/djradio", element: <Djradio /> },
      { path: "/discover/ranking", element: <Ranking /> },
      { path: "/discover/recommend", element: <Recommend /> },
      { path: "/discover/songs", element: <Songs /> },
    ],
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
];

export default routes;
