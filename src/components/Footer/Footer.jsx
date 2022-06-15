import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import './style.css'

export const Footer = () => {
  const {idioma} = useContext(Context)
  return (
    <footer className='footer-container'>
        <p>{idioma ? 'Desarrollado y diseñado por Estiven Mahecha Henao. ©2022. Reservados todos los derechos.' : 'Developed and designed by Estiven Mahecha Henao. ©2022. All rights reserved.'}</p>
    </footer>
  )
}
