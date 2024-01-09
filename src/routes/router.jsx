import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import NotFound from "../Layout/NotFound";
import Home from "../pages/Home/Home/Home";
import ContactRoute from "../pages/RoutePages/ContactRoute";
import ServicesRoute from "../pages/RoutePages/ServicesRoute";
import SkillsRoute from "../pages/RoutePages/SkillsRoute";
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
        element: <ServicesRoute></ServicesRoute>,
      },
      {
        path: "/skills",
        element: <SkillsRoute></SkillsRoute>,
      },
      {
        path: "contact",
        element: <ContactRoute></ContactRoute>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
