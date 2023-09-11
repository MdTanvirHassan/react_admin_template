// routes.js

import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";

const routes = [
  {
    path: '/admin',
    exact: true,
    name: 'Admin'
  },
  {
    path: '/admin/dashboard',
    exact: true,
    name: 'Dashboard',
    element: <Dashboard /> // No need to pass props here
  },
  {
    path: '/admin/profile',
    exact: true,
    name: 'Profile',
    element: <Profile /> // No need to pass props here
  },
];

export default routes;
