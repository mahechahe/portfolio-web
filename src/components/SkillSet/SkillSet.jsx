import './style.css'
import { iconsSkillset } from '../../api/icons'
import { useState, useContext } from 'react'
import { Context } from '../context/Context'

export const SkillSet = ({id}) => {
    const {idioma} = useContext(Context)
    const [open, setOpen] = useState(false)
    const [idTitle, setId] = useState('')

    const openModal = (title) => {
        setOpen(true)
        setId(title)
        setTimeout(() => {
            setOpen(false)
        }, 5000)
    }

  return (
    <section className='section-container--skillset' id={id}>
        <h2 className='title-icons'>{idioma ? 'Habilidades' : 'Skillset'}</h2>
        <div className='container-div-skillset'>
            {iconsSkillset.map((icon, i) => (
                <div className='div--icon' key={i} >
                    {open && idTitle === icon.title ? 
                        <div className='div-title--icon'>
                            <p>
                                {icon.title}
                            </p>
                        </div>
                    : ''}
                    <img onClick={() => setOpen(() => openModal(icon.title))} src={icon.img} className='img--icon' alt='skillset'></img>
                </div>
            ))}
        </div>
    </section>
  )
}
