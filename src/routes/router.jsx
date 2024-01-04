import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Services from "../pages/Services/Services";
import Expertise from "../pages/Home/Expertise/Expertise";
import Contact from "../pages/Contact/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/skills",
        element: <Expertise></Expertise>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default router;
