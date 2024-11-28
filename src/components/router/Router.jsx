import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import Home from "../Home";
import AddCoffee from "../AddCoffee";
import Update from "../Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
  },
]);

export default router;
