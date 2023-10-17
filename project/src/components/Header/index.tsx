import './Header.scss'
import { Navbar } from '../Navbar'
import { Logo } from '../Logo'
import burger from '../images/burger.png'
import { MenuBurger } from '../MenuBurger'


export function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__body">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header__nav-list">
            <Navbar />
          </div>
          <div className="header__menu-burger">
            <MenuBurger />
          </div>
        </div>
      </div>
    </header>
  )
}
