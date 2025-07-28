import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import BrowsePage from "../pages/BrowsePage";

const Private = () => {
  const appRouter = createBrowserRouter([
    {
      path: ROUTES.BROWSE,
      element: <BrowsePage />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Private;
