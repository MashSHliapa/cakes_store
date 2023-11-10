import arrow from '../images/arrow.png'
import './ComeBack.scss'

export function ComeBack() {
  function handleClickImage() {
    window.history.back()
  }

  return (
    <div className="come-back" onClick={handleClickImage}>
      <div className="come-back__container container">
        <div className="come-back__arrow">
          <img src={arrow} />
        </div>
      </div>
    </div>
  )
}
