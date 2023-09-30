import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'


export function ModalPreview (props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.image} fluid />
      </Modal.Body>
    </Modal>
  )
}
