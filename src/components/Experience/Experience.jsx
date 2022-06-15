import React from 'react'
import { useContext } from 'react'
import cocap from '../../assets/cocap.png'
import { Context } from '../context/Context'
import './style.css'

export const Experience = ({id}) => {
    const {idioma} = useContext(Context)
  return (
    <section className='section-experience' id={id}>
        <h2 className='title-experience'>{idioma ? 'Experiencia' : 'Experience'}</h2>
        <div className='div-experience'>
            <div className='div-experience-image'>
                <img src={cocap} className='image-experience' alt="hola" />
            </div>
            <div className='descrption-experience'>
                <h2>Frontend Developer</h2>
                <h5>CO Capitalizaciones</h5>
                <p> {idioma ? 'Desarrollador Frontend con React y Typescript. Líder técnico: Juan Guillermo Moreno,   contacto: +57 321 2779501' : 'Developer Frontend whit React and Typescript. Technical lider: Juan Guillermo Moreno, contact: +57 321 2779501'}
                </p>
            </div>
        </div>
    </section>
  )
}
