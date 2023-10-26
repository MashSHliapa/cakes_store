import { NavLink } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import './Menu.scss'

export function Menu() {
  const pageElement = useRef(null);

  const [openMenu, setOpenMenu] = useState(false)
  function handleClickMenu() {
    setOpenMenu(!openMenu)
  }

  function handleClickCloseMenu(event) {
    if (!event.target.classList.contains('dropdown-toggle')) {
      setOpenMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickCloseMenu)
    return () => document.removeEventListener('click', handleClickCloseMenu)
  }, [])

  function handleClickMenuWithScroll() {
    let yOffset
    if (window.innerWidth < 768) {
      yOffset = 400;
    } else if (window.innerWidth < 992) {
      yOffset = 500;
    } else {
      yOffset = 650;
    }
    const element = pageElement.current
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
    element.removeEventListener('click', handleClickMenuWithScroll)
  }

  return (
    <div>
      <li className="nav-item dropdown">
        <NavLink to="/cakes/pages/1" className="nav-link dropdown-toggle" onClick={handleClickMenu}>Примеры работ</NavLink>
      </li>
      <ul className={`menu ${openMenu ? 'menu__display-block' : 'menu__display-none'}`} ref={pageElement} onClick={handleClickMenuWithScroll}>
        <li className="nav-item">
          <NavLink to="/cakes/children_cakes" className="nav-link" >Торты для детей</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cakes/wedding_cakes" className="nav-link" >Торты для свадьбы</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cakes/pies" className="nav-link">Пирожные</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cakes/for_men" className="nav-link">Торты для мужчин</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cakes/for_women" className="nav-link">Торты для леди</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cakes/pies" className="nav-link me-5">Торты На Крещение</NavLink>
        </li>
      </ul>
    </div>
  )
}
