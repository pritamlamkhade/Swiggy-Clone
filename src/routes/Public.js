import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import HomePage from "../pages/HomePage";

const Public = () => {
  const appRouter = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <HomePage />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Public;
