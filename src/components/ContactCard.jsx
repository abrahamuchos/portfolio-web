import React, { useRef, useState } from 'react';

import mailIcon from '../assets/icons/mail.svg'
import copyIcon from '../assets/icons/copy.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'
import otherPageIcon from '../assets/icons/page-blank-icon.svg'

import '../styles/contact-card.css';
import InfoPill from "./InfoPill.jsx";

export default function ContactCard() {
  const copyRef = useRef(null);
  const [isShowPill, setIsShowPill] = useState(/** @type {boolean} */ false)
  const [messagePill, setMessagePill] = useState(/** @type {string|null} */ null)

  /**
   *
   * @param {Event} e - event
   * @returns {Promise<void>}
   */
  const handleCopyClick = async (e) => {
    e.preventDefault();
    const text = copyRef.current.getAttribute('value') || 'abrahamuchos'
    
    if(navigator.clipboard && navigator.clipboard.writeText){
      try{
        await navigator.clipboard.writeText(text);
        setIsShowPill(true);
        setMessagePill(`${text} ¡Fue copiado al portapapeles!`)
        console.log('Texto copiado al portapapeles:', text);

      }catch(err) {
        console.error('Error al copiar al portapapeles:', err);
        setMessagePill('Upps, algo salio mal. Intenta de nuevo.')
      }

    }else{
      console.warn('La API del Portapapeles no está disponible.');
      setMessagePill('Upps, no vamos a poder copiarlo al portapapeles')
    }
  }

  return (
    <div className='px-12 pt-8 pb-20  max-w-[1254px] h-[380px] relative rounded-2xl overflow-hidden'>
      <div className="w-full h-full relative flex flex-col items-start justify-center z-10">
        <h2 className='heading-4-light-white mb-2.5'>Contáctame</h2>
        <h4 className='heading-2 mb-16'>¿Listo para conectar? Email, LinkedIn y GitHub.</h4>

        <div className='flex justify-between w-full mb-0'>
          <div className="flex">
            <a href='mailto:abrahamuchos@gmail.com' className='heading-3-light-white flex items-center cursor-pointer'>
              <img src={mailIcon} alt="mail-icon" className='w-6 h-6 mr-2.5'/>
              <span>abrahamuchos@gmail.com</span>
            </a>
            <a value="abrahamuchos@gmail.com" ref={copyRef} className='cursor-pointer' onClick={(e) => handleCopyClick(e)}>
              <img src={copyIcon} className='w-4 h-4 self-start ml-1' alt="copy-icon"/>
            </a>
          </div>

          <div className="flex">
            <a href='https://linkedin.com/in/abrahamuchos'
               className='heading-3-light-white underline flex items-center'>
              <img src={linkedinIcon} alt="linkedin-icon" className='w-6 h-6 mr-2.5'/>
              <span>linkedin.com/in/abrahamuchos</span>
            </a>
            <a href="https://linkedin.com/in/abrahamuchos" target='_blank' className='cursor-pointer'>
              <img src={otherPageIcon} className='w-4 h-4 self-start ml-1' alt="copy-icon"/>
            </a>
          </div>

          <div className='flex'>
            <a href='https://github.com/abrahamuchos' className='heading-3-light-white underline flex items-center'>
              <img src={githubIcon} alt="github-icon" className='w-6 h-6 mr-2.5'/>
              <span>github.com/abrahamuchos</span>
            </a>
            <a href="https://github.com/abrahamuchos" target='_blank' className='cursor-pointer'>
              <img src={otherPageIcon} className='w-4 h-4 self-start ml-1' alt="copy-icon"/>
            </a>
          </div>

        </div>
      </div>

      <div className="card-img-test absolute inset-0 z-0 w-full h-full object-cover
        bg-[url('../assets/images/gradient-hero.avif')] [transform:rotate(0)_scale(1.7)] origin-[47%_63%]"
      >
      </div>
      <div className="z-1 pointer-events-none absolute inset-0 bg-[url('../assets/images/noise.webp')] mix-blend-soft-light"></div>

      <InfoPill message={messagePill} isShow={isShowPill} setIsShow={setIsShowPill} />
    </div>
  );
}