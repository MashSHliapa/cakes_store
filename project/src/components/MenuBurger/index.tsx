import './MenuBurger.scss'
import burger from '../images/burger_black.png'
import { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'

export function MenuBurger() {
  const [openNavbar, setOpenNavbar] = useState(false)
  function handleClickOpenNavbar() {
    setOpenNavbar(!openNavbar)
  }
  useEffect(() => {
    const handleClickCloseNavbar = (event) => {
      if (!event.target.closest('.header__menu-burger')) {
        setOpenNavbar(false);
      }
    };

    document.addEventListener('click', handleClickCloseNavbar);
    return () => document.removeEventListener('click', handleClickCloseNavbar);
  }, []);

  return (
    <nav className=''>
      <a href="#">
        <img className="burger" width={30} height={30} src={burger} alt="" onClick={handleClickOpenNavbar} />
      </a>
      <div className={`nav ${openNavbar ? 'nav__display-block' : 'nav__display-none'}`}><Navbar /></div>
    </nav>
  )
}
