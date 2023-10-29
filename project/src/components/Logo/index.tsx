import logo_grey from '../images/logo_grey.png'
import './Logo.scss'

export function Logo() {
  return (
    <div className="logo">
      <img src={logo_grey} width="210" height="210" alt="logo" />
    </div>
  )
}
