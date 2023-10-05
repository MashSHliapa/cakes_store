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
          <div className="footer__icons">
            <a href="#">
              <img src={facebook} width={15} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/vanilla.crazy/?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank">
              <img src={instagram} width={15} alt="instagram" />
            </a>
            <a href="https://web.telegram.org/k/#/@MariaShliapnikova" target="_blank">
              <img src={telegram} width={15} alt="telegram" />
            </a>
          </div>
        </div>
        <div className="footer__adress">Адрес самовывоза: <br /> г. Минск, ул. Белецкого, 14.а</div>
      </div>
    </div>
  )
}
