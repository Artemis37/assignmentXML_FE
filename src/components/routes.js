import CommonLayout from "../layout/CommonLayout";
import Login from "../pages/login";

const routes = [
  {
    path: "/",
    requireLogin: false,
    component: <CommonLayout />,
  },
  {
    path: "/login",
    requireLogin: false,
    component: <Login />,
  },
];

export default routes;
