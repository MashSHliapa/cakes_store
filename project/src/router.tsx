import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CaKes } from "./pages/Cakes";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <CaKes />,}
    ]
  }
])
