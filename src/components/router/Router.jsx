import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/Mainlayout";
import Home from "../Home";
import AddCoffee from "../AddCoffee";
import Update from "../Update";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Users from "../Users";

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
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUP",
        element: <SignUp />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

export default router;
