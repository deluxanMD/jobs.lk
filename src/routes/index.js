import { useRoutes } from 'react-router-dom';

// project import
import LoginRoutes from './LoginRoutes';
import DemoRoutes from './DemoRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([DemoRoutes, LoginRoutes]);
}
