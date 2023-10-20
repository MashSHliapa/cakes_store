import photo from '../images/photo.jpg'
import './About.scss'
export function About() {

  return (
    <main className="about">
      <div className="about__container container">
        <div className="about__data">
          <div className="about__description">
            <div className="about__name">Ольга</div>
            <div className="about__title">Ваш семейный кондитер</div>
            <div className="about__slogan">С моими десертами остаются навсегда! </div>
          </div>
          <div className="about__photo">
            <img src={photo} width="500" height="500" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}
