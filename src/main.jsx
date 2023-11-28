import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Users from "./Users.jsx";
// import MainNav from "./MainNav.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <MainNav />,
  //   children: [
  { path: "/", element: <App /> },
  { path: "/users", element: <Users /> },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </ChakraProvider>
  </React.StrictMode>
);
