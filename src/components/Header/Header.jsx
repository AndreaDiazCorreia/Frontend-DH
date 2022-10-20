import React from 'react'
import Headerbuttons from './HeaderButtons/Headerbuttons'
import ProfileImg from './Avatar/ProfileImg'
import NavBarBurguer from './Navbar/NavBar.Burguer'
import "./header.css"
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo-1.png'


export const Header = () => {
  return (
    
    <header>
    <div className="contenedor-logo">
      <div className="logo">
        <a href="/">
          <img src={LogoImg} alt="Logo"/>
          </a>
      </div>
        <h2>Sentite como en tu hogar</h2>
    </div>
    <div className="contenedor-menu">
        <Headerbuttons />
    </div>
    <div className="iconoBurguer">
    </div>
  </header>

  )
}
export default Header