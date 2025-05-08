import React, { useRef, useState } from 'react';

import mailIcon from '../assets/icons/mail.svg'
import copyIcon from '../assets/icons/copy.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'
import otherPageIcon from '../assets/icons/page-blank-icon.svg'

import InfoPill from "./InfoPill.jsx";

export default function ContactCard() {
  const copyRef = useRef(null);
  const [isShowPill, setIsShowPill] = useState(/** @type {boolean} */ false)
  const [messagePill, setMessagePill] = useState(/** @type {string|null} */ null)

  /**
   * Handle copy click, use navigator api to copy text to clipboard and show message pill
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
    <div className='px-6 pt-10 pb-14 w-full relative rounded-2xl overflow-hidden
       lg:px-4 lg:pt-8 lg:pb-20 lg:max-w-[1254px] lg:h-[380px]
      xl:px-12'
    >
      <div className="w-full h-full relative flex flex-col items-start justify-center z-10">
        <h2 className='heading-4-light-white mb-2.5'>Contáctame</h2>
        <h4 className='heading-2 mb-10  lg:mb-16'>¿Listo para conectar? Email, LinkedIn y GitHub.</h4>

        <div className='flex flex-col justify-between gap-5 w-full mb-0 lg:flex-row'>
          <div className="flex justify-center sm:justify-start">
            <a href='mailto:abrahamuchos@gmail.com' className='heading-3-light-white flex items-center cursor-pointer'>
              <img src={mailIcon} alt="mail-icon" className='w-6 h-6 mr-2.5'/>
              <span className='sm:hidden'>abrahamuchos</span>
              <span className='max-sm:hidden'>abrahamuchos@gmail.com</span>
            </a>
            <a value="abrahamuchos@gmail.com" ref={copyRef} className='cursor-pointer' onClick={(e) => handleCopyClick(e)}>
              <img src={copyIcon} className='w-4 h-4 self-start ml-1' alt="copy-icon"/>
            </a>
          </div>

          <div className="flex justify-center sm:justify-start">
            <a href='https://linkedin.com/in/abrahamuchos'
               className='heading-3-light-white underline flex items-center'>
              <img src={linkedinIcon} alt="linkedin-icon" className='w-6 h-6 mr-2.5'/>
              <span className="sm:hidden">abrahamuchos</span>
              <span className='max-sm:hidden'>linkedin.com/in/abrahamuchos</span>
            </a>
            <a href="https://linkedin.com/in/abrahamuchos" target='_blank' className='cursor-pointer'>
              <img src={otherPageIcon} className='w-4 h-4 self-start ml-1' alt="copy-icon"/>
            </a>
          </div>

          <div className='flex justify-center sm:justify-start'>
            <a href='https://github.com/abrahamuchos' className='heading-3-light-white underline flex items-center'>
              <img src={githubIcon} alt="github-icon" className='w-6 h-6 mr-2.5'/>
              <span className='sm:hidden'>abrahamuchos</span>
              <span className='max-sm:hidden'>github.com/abrahamuchos</span>
            </a>
            <a href="https://github.com/abrahamuchos" target='_blank' className='cursor-pointer'>
              <img src={otherPageIcon} className='w-4 h-4 self-start ml-1' alt="copy-icon"/>
            </a>
          </div>

        </div>
      </div>

      <div className="card-img-test absolute inset-0 z-0 w-full h-full object-cover bg-[url('../assets/images/gradient-hero.avif')] origin-[47%_63%]
        md:[transform:rotate(0)_scale(1.7)]"
      >
      </div>
      <div className="z-1 pointer-events-none absolute inset-0 bg-[url('../assets/images/noise.webp')] mix-blend-soft-light"></div>

      <InfoPill message={messagePill} isShow={isShowPill} setIsShow={setIsShowPill} />
    </div>
  );
}