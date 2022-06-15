import React, {useState, useContext} from 'react'
import './style.css'
import { motion, AnimatePresence } from "framer-motion"
import { portfolio } from '../../api/portfolio'
import Github from '../../assets/github.png'
import website from '../../assets/web.png'
import { Context } from '../context/Context'


export const Portfolio = ({id}) => {
  const {idioma} = useContext(Context)
  const [selectedId, setSelectedId] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState({})
  
  return (
    <section className='section--container' id={id}>
      <h2 className='title-portfolio'>{idioma ? 'Portafolio' : 'Portfolio'}</h2>
      {openModal && <div className='opacity-active'></div>}
      <div className='div--container'>
          {portfolio?.map((portfolio) => (
            <>
              <motion.div 
                layoutId={portfolio.id} 
                key={portfolio.id} 
                className='div-container-detail' 
                onClick={() => {          
                  setSelectedId(portfolio.id)
                  setOpenModal(true)
                  setData(portfolio)
                }}
              >
                <motion.img src={portfolio.img} className='img'></motion.img>
                <motion.h2 className='title'>{portfolio.title}</motion.h2>
                
              </motion.div>
            </>
          ))}
      </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div 
              className='modal'
              layoutId={selectedId} 
            >
              <motion.div className='container--modal-title'>
                <motion.h2>{data.title}</motion.h2>
              </motion.div>
              <motion.div className='container--modal-image'>
                <img className='imgModal' src={data.img} alt={data.title} />
              </motion.div>
              <motion.div className='container--modal-text'>
                <motion.p >{ idioma ? data.descriptionEspanih : data.description}</motion.p>
              </motion.div>
              <motion.button className='button-close'
                onClick={() => {
                  setSelectedId(null)
                  setOpenModal(false)
                }}
              >X</motion.button>

              <motion.div className='div-enlaces'>
                <motion.a target='_blank' href={data.repository}>
                  <motion.img className='img-icon' src={Github}></motion.img>
                </motion.a>
                <motion.a target='_blank'  href={data.website}>
                  <motion.img className='img-icon' src={website}></motion.img>
                </motion.a>
              </motion.div>
              
            </motion.div>
          )}
        </AnimatePresence>
    </section>
  )
}
