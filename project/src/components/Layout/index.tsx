import './Layout.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/'
import { Footer } from '../Footer'
import { About } from '../About'
export function Layout() {
  return (
    <div className="layout">
      <Header />
      <About />
      <div className="layout__outlet outlet">
        <div className="outlet__container container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
