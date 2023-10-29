import './FillingsCard.scss'

export function FillingsCard(props) {
  return (
    <div className="fillings-card">
      <div className='fillings-card__title'>{props.filling.title}</div>
      <div className="fillings-card__image">
        <a href="#" role="button" >
          <img src={props.filling.image} width="200" height="250" alt="" ></img>
        </a>
      </div>
      <div className="fillings-card__subtitle">{props.filling.subtitle}</div>
      <div className="fillings-card__weight"><b>Минимальный вес:</b> {props.filling.weight}</div>
      {/* <ModalPreview image={props.cake.image} show={showModal} onHide={handleHide} title={props.cake.title} /> */}
    </div>
  )
}
