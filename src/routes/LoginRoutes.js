import { lazy } from 'react';

// project import
import Loadable from 'demo/components/Loadable';
import MinimalLayout from 'demo/layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('demo/pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('demo/pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      element: <AuthRegister />
    }
  ]
};

export default LoginRoutes;
