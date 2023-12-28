import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import App from "../Pages/App";
import Manager from "../Pages/Manager";
import Client from "../Pages/Client";
import SignIn from "../Pages/SignIn";
import Status from "../Pages/Status";
import Folder from "../Pages/Folder";
import ListManager from "../Pages/ListManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h3>Page not found</h3>,
    children: [
      { index: true, element: <App /> },
      {
        path: "manager",
        element: <Manager />,
      },
      {
        path: "client",
        element: <Client />,
      },
      {
        path: "sign",
        element: <SignIn />,
      },
      {
        path: "status",
        element: <Status />,
      },
      {
        path: "folder",
        element: <Folder />,
      },
      {
        path: "listmanager",
        element: <ListManager />,
      },
    ],
  },
]);
const AppRouter = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
