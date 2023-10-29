import logo from '../images/logo_footer.png'
import { Contacts } from '../Contacts'
import './Footer.scss'


export function Footer() {
  return (
    <div className="footer" id="contacts">
      <div className="footer__container container">
        <div className="footer__row">
          <div className="footer__logo">
            <img src={logo} alt="logo" width={"180"} height={"180"} />
          </div>
          <div className="footer__blog">
            <Contacts />
            <div className="footer__adress">Адрес самовывоза: <br /> г. Минск, ул. Белецкого, 14/2</div>
          </div>
          <div className="footer__return-to-top"><a href="#">Вернуться на главную страницу</a></div>
        </div>
      </div>
    </div>
  )
}
