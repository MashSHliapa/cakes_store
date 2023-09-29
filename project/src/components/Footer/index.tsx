import './Footer.scss'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'


export function Footer() {
  return (
    <div className="footer">
      <div className="footer__contacts">
        <div className="footer__phone-icons">
          <div className="footer__phone">Связаться со мной:<br />+375(29) 226-67-34</div>
          <div className="icons">
            <img src={facebook} width={15} alt="facebook" />
            <img src={instagram} width={15} alt="instagram" />
            <img src={telegram} width={15} alt="instagram" />
          </div>
        </div>
        <div className="footer__adress">Адрес самовывоза: <br /> г. Минск, ул. Белецкого, 14.а</div>
      </div>
    </div>
  )
}
