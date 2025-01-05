import App from "@/App";
import Concept from "@/pages/concept";
import { Contact } from "@/pages/contact";
import { Experts } from "@/pages/experts";
import Home from "@/pages/home";
import { Leader } from "@/pages/leader";
import { Solution } from "@/pages/solution";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/concept",
        element: <Concept />,
      },
      {
        path: "/solution",
        element: <Solution />,
      },
      {
        path: "/leadership",
        element: <Leader />,
      },
      {
        path: "/experts",
        element: <Experts />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
