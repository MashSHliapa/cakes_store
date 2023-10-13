
import './Header.scss'
import { Navbar } from '../Navbar'
import { Logo } from '../Logo'
import photo from '../images/photo.jpg'

export function Header() {
  return (
    <div className="header">
      <div className="header__section">
        <div className="header__container">
          <div className="header__navbar">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__nav-list">
              <Navbar />
            </div>
          </div>
          <div className="header__data">
            <div className="header__about">
              <div className="header__name">Ольга</div>
              <div className="header__title">Ваш семейный кондитер</div>
              <div className="header__slogan">С моими десертами остаются навсегда! </div>
            </div>
            <div className="header__photo">
              <img src={photo} width="500" height="500" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
