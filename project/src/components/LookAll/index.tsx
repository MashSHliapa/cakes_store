import { NavLink } from "react-router-dom"
import './LookAll.scss'

export function LookAll() {
  return (
    <div className="look-all">
      <div className="look-all__container container">
        <div className="look-all__title">
          <NavLink className="look-all__link" to="/cakes/pages/1">Посмотреть все работы</NavLink>
        </div>
      </div>
    </div>
  )
}
