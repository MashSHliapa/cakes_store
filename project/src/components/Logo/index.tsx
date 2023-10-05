import logo_grey from '../images/logo_grey.png'
import './Logo.scss'

export function Logo() {
  return (
    <div className="logo">
      <img src={logo_grey} width="200" height="200" alt="logo" />
    </div>
  )
}
