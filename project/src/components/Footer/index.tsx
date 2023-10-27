import './Footer.scss'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import logo from '../images/logo_footer.png'


export function Footer() {
  return (
    <div className="footer" id="contacts">
      <div className="footer__container container">
        <div className="footer__row">
          <div className="footer__logo">
            <img src={logo} alt="logo" width={"180"} height={"180"} />
          </div>
          <div className="footer__contacts">
            <div className="footer__phone-icons">
              <div className="footer__phone">Связаться со мной:<br />+375(29) 226-67-34</div>
              <div className="footer__email">ovknady@mail.ru</div>
              <div className="footer__icons">
                <a href="#">
                  <img src={facebook} width={20} alt="facebook" />
                </a>
                <a href="https://www.instagram.com/vanilla.crazy/?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank">
                  <img src={instagram} width={20} alt="instagram" />
                </a>
                <a href="https://web.telegram.org/k/#/@MariaShliapnikova" target="_blank">
                  <img src={telegram} width={20} alt="telegram" />
                </a>
              </div>
            </div>
            <div className="footer__adress">Адрес самовывоза: <br /> г. Минск, ул. Белецкого, 14/2</div>
          </div>
          <div className="footer__return-to-top"><a href="#">Вернуться на главную страницу</a></div>
        </div>
      </div>
    </div>
  )
}
