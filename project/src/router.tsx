import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Cakes } from "./pages/Cakes";
import { Cake } from "./pages/Cake";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Cakes />
      },
      {
        path: 'selected/:cakeId',
        element: <Cake />
      },
    ]
  }
])
