import photo from '../images/photo.jpg'
import './Main.scss'
export function Main() {

  return (
    <main className="main">
      <div className="main__container container">
        <div className="main__data">
          <div className="main__about">
            <div className="main__name">Ольга</div>
            <div className="main__title">Ваш семейный кондитер</div>
            <div className="main__slogan">С моими десертами остаются навсегда! </div>
          </div>
          <div className="main__photo">
            <img src={photo} width="500" height="500" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}
