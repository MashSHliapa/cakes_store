import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import './Contacts.scss'

export function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__phone">Связаться со мной:<br />+375(29) 226-67-34</div>
      <div className="contacts__email">ovknady@mail.ru</div>
      <div className="contacts__icons">
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
  )
}
