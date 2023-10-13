import { useDispatch, useSelector } from 'react-redux'
import { ModalPreview } from '../ModalPreview/ModalPreview'
import './CakeCard.scss'
import { setModalPreview } from '../../redux/modalPreviewSlice'
import { Image } from 'react-bootstrap'
import { Title } from '../Title'

export function CakeCard(props) {

  const dispatch = useDispatch()
  function handleClick() {
    dispatch(setModalPreview(true))
  }
  function handleHide() {
    dispatch(setModalPreview(false))
  }
  const showModal = useSelector(state => {
    return state.modalPreview.isOpen
  })

  return (
    <div className="card-cake">
      <Title>{props.cake.title}</Title>
      <div className="card-cake__image">
        <a href="#" role="button" onClick={handleClick}>
          <Image src={props.cake.image} width="170" height="200" alt="" ></Image>
        </a>
      </div>
      <div className="card-cake__subtitle">{props.cake.subtitle}</div>
      <div className="card-cake__weight">Вес: {props.cake.weight}</div>
      <ModalPreview image={props.cake.image} show={showModal} onHide={handleHide} title={props.cake.title} />
    </div>
  )
}
