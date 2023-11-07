import logo from '../images/logo_footer.png'
import { Contacts } from '../Contacts'
import './Footer.scss'


export function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__container container">
        <div className="footer__body">
          <div className="footer__company">
            <div className="footer__logo">
              <img src={logo} alt="logo" width={"130"} height={"100"} />
            </div>
            <div className="footer__about">
              <div className="footer__name">Кабрынская Ольга</div>
              <div className="footer__slogan">Ваш семейный кондитер!</div>
            </div>
          </div>
          <div className="footer__box">
            <div className="footer__data">
              <div className="footer__contacts"><Contacts /></div>
              <div className="footer__info">
                <div className="footer__adress"><b>Адрес самовывоза:</b><span>г. Минск, ул. Белецкого, 14/2</span></div>
                <div className="footer__delivery"><b>Доставка:</b><span>осуществляется Яндекс доставкой. Свадебные заказы от 4 кг доставляются на место мероприятия</span>
                </div>
              </div>
              <div className="footer__return-to-top"><a href="#">Вернуться на главную страницу</a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
