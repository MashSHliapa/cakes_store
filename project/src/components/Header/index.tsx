import { NavLink } from 'react-router-dom'
import logo_grey from '../images/logo_grey.png'
import './Header.scss'

export function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <NavLink to="/" className="navbar-brand">
            <img className="pb-4" src={logo_grey} width="180" height="200" alt="logo" />
          </NavLink>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">

            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
              <ul className="navbar-nav d-flex justify-content-between">
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Торты</a>
                </li> */}
                <li className="nav-item">
                  <NavLink to="/cakes/wedding_cakes" className="nav-link">Свадебные торты</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cakes/children_cakes" className="nav-link">Детские торты</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cakes/pies" className="nav-link">Пирожные</NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Декорации</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Начинки</a>
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
            {/* </div> */}
          </div>
        </nav>
      </div>
    </div>
  )
}
