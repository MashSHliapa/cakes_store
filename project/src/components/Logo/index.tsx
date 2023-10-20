import logo_grey from '../images/logo_grey.png'
import './Logo.scss'

export function Logo() {
  return (
    <div className="logo">
      <img src={logo_grey} width="180" height="180" alt="logo" />
    </div>
  )
}
