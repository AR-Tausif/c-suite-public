import App from "@/App";
import Concept from "@/pages/concept";
import { Experts } from "@/pages/experts";
import Home from "@/pages/home";
import { Leader } from "@/pages/leader";
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
      {
        path: "/leadership",
        element: <Leader/>,
      },
      {
        path: "/experts",
        element: <Experts/>,
      },
    ],
  },
]);

export default router;
