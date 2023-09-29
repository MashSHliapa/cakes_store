import './CakeCard.scss'

export function CakeCard(props) {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={props.cake.image} width="170" height="200" alt="" ></img>
      </div>
      <div className="card__title m-1">{props.cake.title}</div>
      <div className="card__subtitle m-1">{props.cake.subtitle}</div>
      <div className="card__weight m-1">Вес: {props.cake.weight}</div>
      <div className="card__estimate m-1">
        <div className="card__price">{props.cake.price}</div>
        {/* <Rating rating={props.book.rating} /> */}
      </div>
    </div >
  )
}
