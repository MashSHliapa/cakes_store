import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Cakes } from "./pages/Cakes";
import { Cake } from "./pages/Cake";
import { WeddingCakes } from "./pages/WeddingCakes";
import { ChildrenCakes } from "./pages/ChildrenCakes";
import { Pies } from "./pages/Pies";
import { CakesForMen } from "./pages/ForMen";
import { CakesForWomen } from "./pages/CakesForWomen";
import { Fillings } from "./pages/Fillings";

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
      {
        path: '/cakes/wedding_cakes',
        element: <WeddingCakes />
      },
      {
        path: '/cakes/children_cakes',
        element: <ChildrenCakes />
      },
      {
        path: '/cakes/pies',
        element: <Pies />
      },
      {
        path: '/cakes/for_men',
        element: <CakesForMen />
      },
      {
        path: '/cakes/for_women',
        element: <CakesForWomen />
      },
      {
        path: '/cakes/fillings',
        element: <Fillings />
      },
    ]
  }
])
