import React, {useContext} from 'react'
import './style.css'
import { Context } from '../context/Context'
import spanish from '../../assets/espana.png'
import english from '../../assets/reino-unido.png'
import menu from '../../assets/menu (2).png'
import { useState } from 'react'
import { Link} from "react-scroll";


const Nav = ({ids}) => {
  const {idioma, setIdioma} = useContext(Context)
  const [open, setOPen] = useState(false)

  return (

    <nav>
      <div className='icon-language'>
        <button type='button'>
          <img src={spanish} alt='spanih' onClick={() => setIdioma(true)}/>
        </button>
        <button type='button'>
          <img src={english} alt='english' onClick={() => setIdioma(false)}/>
        </button>
      </div>
      <div className='div-mobile'>
        <img src={menu} alt='menu' onClick={() => setOPen(!open)}/>
      </div>
      <ul className='ul-navbar'>
        <li><Link activeClass="active" to={ids.id1} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Portafolio' : 'Portfolio'}</Link></li>
        <li><Link activeClass="active" to={ids.id2} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Habilidades' : 'Skillset'}</Link></li>
        <li><Link activeClass="active" to={ids.id3} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Experiencia' : 'Experience'}</Link></li>
        <li><Link activeClass="active" to={ids.id4} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Acerca de' : 'About'}</Link></li>
        <li><Link activeClass="active" to={ids.id5} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Contacto' : 'Contact'}</Link></li>
      </ul>
      {open && 
        <div className='ul-navbar--div'>
          <ul className='ul-navbar-menu'>
            <li ><Link onClick={() => setOPen(false)} activeClass="active" to={ids.id1} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Portafolio' : 'Portfolio'}</Link></li>
            <li><Link onClick={() => setOPen(false)} activeClass="active" to={ids.id2} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Habilidades' : 'Skillset'}</Link></li>
            <li><Link onClick={() => setOPen(false)} activeClass="active" to={ids.id3} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Experiencia' : 'Experience'}</Link></li>
            <li><Link onClick={() => setOPen(false)} activeClass="active" to={ids.id4} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Acerca de' : 'About'}</Link></li>
            <li><Link onClick={() => setOPen(false)} activeClass="active" to={ids.id5} spy={true} smooth={true} offset={-70} duration={500}>{idioma ? 'Contacto' : 'Contact'}</Link></li>
          </ul>
        </div>}
    </nav>
  )
}

export default Nav