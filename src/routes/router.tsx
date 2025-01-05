import App from "@/App";
import Concept from "@/pages/concept";
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
        path: "/concept",
        element: <Concept/>,
      },
    ],
  },
]);

export default router;
