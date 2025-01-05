import App from "@/App";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
    ],
  },
]);

export default router;
