import { NavLink } from "react-router-dom"
import './LookAll.scss'

export function LookAll() {
  return (
    <div className="look-all link">
      <div className="link__container container">
        <div className="link__title">
          <NavLink className="link__item" to="/cakes/pages/1">Посмотреть все работы</NavLink>
        </div>
      </div>
    </div>
  )
}
