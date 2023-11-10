import './Layout.scss'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/'
import { Footer } from '../Footer'
import { Main } from '../Main'
import { Reviews } from '../../pages/Reviews'

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main/>
      <div className="layout__outlet">
        <div className="layout__container container">
          <Outlet />
        </div>
      </div>
      <Reviews />
      <Footer />
    </div>
  )
}
