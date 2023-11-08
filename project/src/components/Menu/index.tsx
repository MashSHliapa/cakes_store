import { NavLink } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { createScroll } from '../../helpers/createScroll'
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

  function handleClickPageWithScroll() {
    createScroll(pageElement)
  }

  return (
    <div>
      <li className="nav-item dropdown">
        {/* <NavLink to="/cakes/pages/1" className="nav-link dropdown-toggle" onClick={handleClickMenu}>Примеры работ</NavLink> */}
        <a href="#" className="nav-link dropdown-toggle" onClick={handleClickMenu}>Примеры работ</a>
      </li>
      <ul className={`menu ${openMenu ? 'menu__display-block' : 'menu__display-none'}`} ref={pageElement} onClick={handleClickPageWithScroll}>
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
          <NavLink to="/cakes/for_men" className="nav-link">Торты для джентельменов</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cakes/for_women" className="nav-link">Торты для леди</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cakes/for_christening" className="nav-link me-5">Торты На Крещение</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cakes/sets" className="nav-link me-5">Наборы</NavLink>
        </li>
      </ul>
    </div>
  )
}
