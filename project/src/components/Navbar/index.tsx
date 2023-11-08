import './Navbar.scss'
import { Menu } from '../Menu'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import { createScroll } from '../../helpers/createScroll.ts'

export function Navbar() {
  const pageElement = useRef(null)

  function handleClickPageWithScroll() {
    createScroll(pageElement)
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav" ref={pageElement}>
          <Menu />
          <li className="nav-item" onClick={handleClickPageWithScroll}>
            <NavLink to="/cakes/fillings" className="nav-link">Начинки</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#delivery">Доставка</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacts">Контакты</a>
          </li>
          <li className="nav-item" onClick={handleClickPageWithScroll}>
            <NavLink to ="/cakes/about_me" className="nav-link">Обо мне</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
