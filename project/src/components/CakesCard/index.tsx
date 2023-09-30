import { Link } from 'react-router-dom'
import './CakesCard.scss'

export function CakesCard(props) {
  return (
    <div className="card">
      <div className="card__image-container">
        <Link to={`/selected/${props.cake.id}`}>
          <img src={props.cake.image} width="170" height="200" alt="" ></img>
        </Link>
      </div>
      <div className="card__title m-1">{props.cake.title}</div>
      <div className="card__subtitle m-1">{props.cake.subtitle}</div>
      <div className="card__weight m-1">Вес: {props.cake.weight}</div>
      <div className="card__estimate m-1">
        <div className="card__price">{props.cake.price}</div>
        {/* <Rating rating={props.book.rating} /> */}
      </div>
      <button type="button" className="btn btn-primary gap-2 col-6 mx-auto mb-3">Подробнее</button>
    </div >
  )
}
