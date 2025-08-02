import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ROUTES } from "./routes";
import BrowsePage from "../pages/BrowsePage";
import Search from "../pages/Search";
import RestaurantMenu from "../components/RestaurantMenu";

const Private = () => {
  const appRouter = createBrowserRouter([
    {
      path: ROUTES.BROWSE,
      element: <BrowsePage />,
    },
    {
      path: ROUTES.SEARCH,
      element: <Search />,
    },
    {
      path: ROUTES.HOME,
      element: <Navigate to={ROUTES.BROWSE} replace />,
    },
    {
      path: ROUTES.RESTAURANT_DETAIL,
      element: <RestaurantMenu />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Private;
