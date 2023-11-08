// import cake_image from '../images/photo_cake.png'
// import wave3 from '../images/wave3.png'
// import cake from '../images/pnoto-cake2.png'
import cake4 from '../images/photo_cake4.png'

import './CakeImage.scss'
export function CakeImage() {
  return (
    <div className="image">
      <div className="image__container ">
        <div className="image__item">
          <img src={cake4} alt="" />
        </div>
      </div>
    </div>
  )
}
