import React from 'react';
import { Outlet } from "react-router";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

export default function BaseLayout() {
  return (
    <div className='relative flex flex-col min-h-screen'>
      <Navigation/>
      <main className='flex-grow px-2 lg:px-12'>
        <Outlet/>

      </main>
      <Footer/>
    </div>
  );
}