import './Layout.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/'
import { Footer } from '../Footer'
import { About } from '../About'
import { Reviews } from '../../pages/Reviews'
import { CakeImage } from '../CakeImage'
export function Layout() {
  return (
    <div className="layout">
      <Header />
      <About />
      {/* <CakeImage /> */}
      <div className="layout__outlet outlet">
        <div className="layout__container container">
          <Outlet />
        </div>
      </div>
      <Reviews />
      <Footer />
    </div>
  )
}
