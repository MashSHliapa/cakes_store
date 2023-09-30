import './CakeCard.scss'

export function CakeCard(props) {
  return (
    <div className="card-cake">
      <div className="card-cake__title">{props.cake.title}</div>
      <div className="card-cake__image-container">
        <img src={props.cake.image} width="170" height="200" alt="" ></img>
      </div>
      <div className="card-cake__subtitle">{props.cake.subtitle}</div>
      <div className="card-cake__weight">Вес: {props.cake.weight}</div>
      <div className="card-cake__price">Цена: {props.cake.price}</div>
    </div>
  )
}
