import './Carousel.scss'
import { useState, cloneElement, useEffect, Children } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const PAGE_WIDTH = 450
export const Carousel = ({ children }) => {

  const [carousel, setCarousel] = useState([])
  const [ offset, setOffset ] = useState(0)

  useEffect(() => {
    setCarousel(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          }
        })
      })
    )
  }, [])

  function handleClickArrowLeft() {
    setOffset((currentOffset) => {
      const newOffset =  currentOffset + PAGE_WIDTH
      console.log(newOffset)
      return Math.min(newOffset, 0)
    })
  }
  function handleClickArrowRight() {
    setOffset((currentOffset) => {
      const newOffset =  currentOffset - PAGE_WIDTH

      const maxOffset = -(PAGE_WIDTH * (carousel.length - 1))
      console.log(newOffset, maxOffset)
      return Math.max(newOffset, maxOffset)
    })
  }

  return (
    <div className="carousel">
      <FaChevronLeft className="carousel__arrow" onClick={handleClickArrowLeft} />
      <div className="carousel__window">
        <div className="carousel__all-items"
        style={{
          transform: `translateX(${offset}px)`,
        }}
        >{carousel}</div>
      </div>
      <FaChevronRight className="carousel__arrow" onClick={handleClickArrowRight} />
    </div>
  )
}
