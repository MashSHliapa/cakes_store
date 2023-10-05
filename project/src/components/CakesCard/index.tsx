import { Link } from 'react-router-dom'
import './CakesCard.scss'

export function CakesCard(props) {
  return (
    <div className="card">
      <div className="card__image-container">
        <Link to={`/selected/${props.cake.id}`}>
          <img src={props.cake.image} width="250" height="300" alt="" ></img>
        </Link>
      </div>
      <div className="card__title">{props.cake.title}</div>
      {/* <div className="card__subtitle m-1">{props.cake.subtitle}</div> */}
      {/* <div className="card__weight m-1">Вес: {props.cake.weight}</div> */}
      <div className="card__estimate m-1">
        <div className="card__price">{props.cake.price}</div>
        {/* <Rating rating={props.book.rating} /> */}
      </div>
      <Link to={`/selected/${props.cake.id}`} type="button" className="card__button">Подробнее</Link>
    </div >
  )
}
