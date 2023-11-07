import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import './Contacts.scss'

export function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__phone"><b>Мои контакты:</b><br/>
        <a href="tel:+375(29) 226-67-34">+375(29) 226-67-34</a>
      </div>
      <div className="contacts__email">Email: ovknady@mail.ru</div>
      <div className="contacts__icons">
        <a href="https://www.instagram.com/vanilla.crazy/?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank">
          <img src={instagram} width={30} alt="instagram" />
        </a>
        <a href="https://web.telegram.org/k/#/@MariaShliapnikova" target="_blank">
          <img src={telegram} width={30} alt="telegram" />
        </a>
      </div>
    </div>
  )
}
