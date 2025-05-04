import React from 'react';
import Hero from "../components/Hero.jsx";
import SeparatorCommand from "../components/SeparatorCommand.jsx";

export default function Home() {
  return (
    <>
      <Hero/>

      <div className='relative mt-10 lg:mt-0'>
        <SeparatorCommand>
          php artisan serve
        </SeparatorCommand>
      </div>

    </>
  );
}