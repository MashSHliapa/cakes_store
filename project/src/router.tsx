import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Cakes } from "./pages/Cakes";
import { Cake } from "./pages/Cake";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/cakes/pages/1" replace={true} />
      },
      {
        path: '/cakes/pages/:pageNumber',
        element: <Cakes />
      },
      {
        path: 'selected/:cakeId',
        element: <Cake />
      },
    ]
  }
])
