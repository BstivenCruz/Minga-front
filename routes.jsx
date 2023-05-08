import {
    createBrowserRouter
  } from "react-router-dom";
  import Main from "./src/layouts/layouts";
  import Index from "./src/pages/Index"
  import NewRole from "./src/pages/NewRole"
  import Signin from "./src/pages/Signin";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path: "/",
          element: <Index />
        },
        {
            path: "/newrole",
            element: <NewRole />
        },
        {
            path: "/signin",
            element: <Signin />
        }
      ]
    }
  ]);
  export default router;