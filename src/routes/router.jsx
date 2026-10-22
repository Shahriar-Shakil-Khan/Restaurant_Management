import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Menu from "../pages/Menu";
import ContactUs from "../pages/ContactUs";
import FoodDetails from "../pages/FoodDetails";
import UpdateFoods from "../pages/UpdateFoods";
import AddFoods from "../pages/AddFoods";
import Dashboard from "../pages/Dashboard";
import AdminProfile from "../pages/AdminProfile";
import AdminProfileUpdate from "../pages/AdminProfileUpdate";
import AdminLogin from "../pages/AdminLogin";
import PrivateRoute from "./PrivateRoute";

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
        path: "contactUs",
        Component: ContactUs,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <AdminProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "profile-update",
        element: (
          <PrivateRoute>
            <AdminProfileUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "menu",
        Component: Menu,
      },
      {
        path: "add-foods",
        element: (
          <PrivateRoute>
            <AddFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "update-foods/:id",
        element: (
          <PrivateRoute>
            <UpdateFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "admin",
        Component: AdminLogin,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
