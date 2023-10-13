import './Layout.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/'
import { Footer } from '../Footer'
export function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="layout__outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
