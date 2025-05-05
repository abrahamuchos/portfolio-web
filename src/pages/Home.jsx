import React from 'react';
import Hero from "../components/Hero.jsx";
import SeparatorCommand from "../components/SeparatorCommand.jsx";
import AboutUs from "../components/AboutUs.jsx";

export default function Home() {
  return (
    <>
      <Hero/>

      <div className='relative my-10 lg:mt-0 lg:mb-14'>
        <SeparatorCommand>
          php artisan serve
        </SeparatorCommand>
      </div>

      <AboutUs/>

      <div className='relative my-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan show:skills
        </SeparatorCommand>
      </div>

    </>
  );
}