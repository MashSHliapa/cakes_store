import { useDispatch, useSelector } from 'react-redux'
import { ModalPreview } from '../ModalPreview/ModalPreview'
import { setModalPreview } from '../../redux/modalPreviewSlice'
import { Image } from 'react-bootstrap'
import './CakeCard.scss'

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
      <div className="card-cake__image">
        <a href="#" role="button" onClick={handleClick}>
          <Image src={props.cake.image} width="260" height="330" alt="" ></Image>
        </a>
      </div>
      <ModalPreview image={props.cake.image} show={showModal} onHide={handleHide} title={props.cake.title} />
    </div>
  )
}
