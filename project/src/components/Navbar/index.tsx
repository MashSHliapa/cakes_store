import './Navbar.scss'
import { Menu } from '../Menu'
import { NavLink } from 'react-router-dom'

export function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <Menu />
          <li className="nav-item">
            <NavLink to="/cakes/fillings" className="nav-link">Начинки</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Доставка</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Контакты</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Обо мне</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
