import React from 'react'
import './style.css'
import { motion } from "framer-motion";
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import { useContext } from 'react';
import { Context } from '../context/Context';
import { useState, useRef } from 'react';
import db from '../../firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import hojaVida from '../../assets/Hoja de vida.pdf'

export const Contact = ({id}) => {
  const ref = useRef(null)
  const {idioma} = useContext(Context)
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)
  
  

  const addData = async(data) => {
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        email: data.email,
        message: data.message
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleChangeForm = () => {
    setDone(true)
		const formData = new FormData(ref.current);
		const data = {
			email: formData.get('email'),
			message: formData.get('message')
		}
    if(data.email === '' || !data.email.includes('@')){
      setError(true)
    }else{
      setError(false)
      addData(data)
    }
    setTimeout(() => {
      setDone(false)
    }, 4000)

  }

  return (
    <section className='section-contact' id={id}>
        <h5>{idioma ? 'Contacto' : 'Contact'}</h5>
        <div className='div-container-contact'> 
            <div className='div-content-contact'>'
                <form ref={ref} id='formulUser'>
                    <label>{idioma ? 'Tu email:' : 'Your email:'}</label>
                    <input type='email' placeholder='Email' name='email'></input>
                    <label>{idioma ? 'Tu mensaje:' : 'Your message:'}</label>
                    <textarea placeholder='Message' name='message'></textarea>
                    <button onClick={() => handleChangeForm()} type='button' className='button-links'>{idioma ? 'Enviar Formulario' : 'Send Form'}</button>
                </form>
            </div>
            <div className='div-content'>
              <div className='div-links'>
                <motion.div
                  className="container-enlaces"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                >
                  <a href='https://github.com/mahechahe' target='_blank' rel="noreferrer">
                    <img src={github} alt='gihub'></img>
                  </a>
                </motion.div>
                <motion.div
                  className="container-enlaces"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                > 
                  <a href='https://www.linkedin.com/in/estiven-mahecha-henao-827880217/' target='_blank' rel="noreferrer">
                    <img src={linkedin} alt='linkedin'></img>
                  </a>
                </motion.div>
                <motion.div
                  className="container-enlaces"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                >
                  <a href='https://www.instagram.com/estiven_mahechah/' target='_blank' rel="noreferrer">
                    <img src={instagram} alt='instagram'></img>
                  </a>
                </motion.div>
              </div>
              <a className='button-links' href={hojaVida} download={'CV Estiven Mahecha Henao'} type='button'>{idioma ? 'Descargar CV' : 'Download CV'}</a>
            </div>
        </div>
        {done &&  <div className={error ? 'div-done--form error' : 'div-done--form correct'}>
                    <p>
                      {idioma ? 'Formulario enviado' : 'Form send'}
                    </p>
                  </div>
        }
            
    </section>
  )
}
