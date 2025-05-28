import SeparatorCommand from "../components/SeparatorCommand.jsx";
import ContactCard from "../components/ContactCard.jsx";
import { Outlet } from "react-router";
import React from "react";


export default function ProjectDetailLayout() {

  return (
    <>
      <div className='relative mb-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan project:list
        </SeparatorCommand>
      </div>

      {/*Post Project*/}
      <Outlet/>
      {/*End Post Project*/}


      {/*Contact*/}
      <div className='relative mt-20 mb-10 lg:mb-12'>
        <SeparatorCommand>
          php artisan contact:list
        </SeparatorCommand>
      </div>

      <section className='w-full mt-16 mb-20'>
        <ContactCard/>
      </section>
      {/*End Contact*/}

    </>
  );
}



