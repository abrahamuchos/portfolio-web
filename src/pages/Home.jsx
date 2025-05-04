import React from 'react';
import Terminal from "../components/Terminal.jsx";

export default function Home() {
  return (

    <section className="flex flex-col items-center min-w-screen gap-5
     md:flex-row
     lg:min-h-[70vh] lg:gap-10
     xl:gap-32">
      <div className="w-full md:1/2 lg:w-2/3 flex flex-col justify-center">
        <span className='mb-3'>Jhonwil Abraham González</span>
        <h1 className='heading-1 mb-7'>Full-Stack, transformar ideas en productos</h1>
        <p className='paragraph'>
          Más allá del código, me apasiona transformar ideas en productos digitales. Con un enfoque full-stack, entiendo
          cada etapa del proceso, desde la concepción hasta la implementación, garantizando que el resultado final no
          solo cumpla con tu visión, sino que la supere.
        </p>
      </div>

      <div className="w-full md:1/2 lg:w-1/3 flex justify-center lg:justify-end">
        <Terminal>
          laravel new abrahamuchos-portfolio
        </Terminal>
      </div>
      
    </section>
  );
}