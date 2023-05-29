import { createBrowserRouter } from "react-router-dom";
import Main from "./src/layouts/layouts";
import Index from "./src/pages/Index";
import NewRole from "./src/pages/NewRole";
import Signin from "./src/pages/Signin";
import Signup from "./src/pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/newrole",
        element: <NewRole />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
