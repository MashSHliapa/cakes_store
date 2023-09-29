import './App.scss'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from './router'
export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
