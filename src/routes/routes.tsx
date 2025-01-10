import { createBrowserRouter } from 'react-router-dom';
import Home from '@/screens/home';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
]);