import React from 'react'
import './style.css'
import AboutImg from '../../assets/foto-estiven.png'
import { useContext } from 'react'
import { Context } from '../context/Context'

export const About = ({id}) => {
  const {idioma} = useContext(Context)
  return (
    <section className='section-about' id={id}>
        <h2 className='title-about'>{idioma ? 'Acerca de mi' : 'About'}</h2>
        <div className='div-about--container'>
            <div className='div-about-image'>
                <img src={AboutImg} alt="about-perfil" />
            </div>
            <div className='div-about-text'>
                <p>{idioma ? 'Estudiante de Arquitectura e Ingeniería de Software con gran pasión por el Desarrollo Web. Tengo una gran capacidad para adaptarme a todo tipo de entornos y sacar siempre lo mejor de mí. Siempre en busca de nuevos retos y proyectos. Me gusta mucho aprender nuevas tecnologías y siempre dispuesto a colaborar en equipo. Interesado en la tecnología y la ciencia. Actualmente vivo en Ibagué, Colombia. Tengo 22 años y muchas ganas de seguir aprendiendo y creciendo personal y profesionalmente. Apasionado de la tecnología y autodidacta con una ideologia muy clara, ¡nunca parar de aprender!' : 'Architecture and Software Engineering student with a great passion in Web Development. I have great ability to adapt to all kinds of environments and always bring the best of me. Always looking for new challenges and projects. I really like learning new technologies and always willing to collaborate as a team. Interested in technology and science. I currently live in Ibague, Colombia. I am 22 years old and eager to continue learning and growing personally and professionally. Technology enthusiast and self-taught with a very clear ideology, never stop learning!'}</p>
            </div>
        </div>
    </section>
  )
}
