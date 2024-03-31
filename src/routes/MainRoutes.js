import { lazy } from 'react';

// project import
import Loadable from 'demo/components/Loadable';
import MainLayout from 'demo/layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('demo/pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('demo/pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('demo/pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('demo/pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('demo/pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('demo/pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/demo',
  element: <MainLayout />,
  children: [
    {
      path: '/demo',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
