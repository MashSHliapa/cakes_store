import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu } from '../Menu'

export function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex justify-content-between">
          <Menu />
          <li className="nav-item">
            <a className="nav-link" href="#">Начинки</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Доставка</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Контакты</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Обо мне</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
