import { Link } from 'react-router-dom'
import './CakesCard.scss'

export function CakesCard(props) {
  return (
    <div className="card">
      <div className="card__image">
        <Link to={`/selected/${props.cake.id}`}>
          <img src={props.cake.image} width="250" height="300" alt="" ></img>
        </Link>
      </div>
      <Link to={`/selected/${props.cake.id}`} type="button" className="card__button">Подробнее</Link>
    </div >
  )
}
