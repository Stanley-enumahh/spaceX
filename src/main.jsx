import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import FormBox from "./pages/forms";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { AuthProvider } from "./context/authContext";

const router = createBrowserRouter([
  {
    path: "/App",
    element: <App />,
  },

  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Form",
    element: <FormBox />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
