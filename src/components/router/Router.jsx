import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import Home from "../Home";
import AddCoffee from "../AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
    ],
  },
]);

export default router;
