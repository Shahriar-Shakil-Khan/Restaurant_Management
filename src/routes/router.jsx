import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Menu from "../pages/Menu";
import ContactUs from "../pages/ContactUs";
import FoodDetails from "../pages/FoodDetails";
import ManageFoods from "../pages/ManageFoods";
import UpdateFoods from "../pages/UpdateFoods";
import AddFoods from "../pages/AddFoods";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "food-details/:id",
        Component: FoodDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/foods/${params.id}`),
      },
      {
        path: "/contactUs",
        Component: ContactUs,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/menu",
        Component: Menu,
      },
      {
        path: "/manage-foods",
        Component: ManageFoods,
      },
      {
        path: "/add-foods",
        Component: AddFoods,
      },
      {
        path: "/update-foods",
        Component: UpdateFoods,
      },
      {
        path: "/menu",
        Component: Menu,
      },

      {
        path: "/about",
        Component: About,
      },

      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
