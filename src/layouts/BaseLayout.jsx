import React from 'react';
import { Outlet } from "react-router";
import Navigation from "../components/Navigation.jsx";

export default function BaseLayout() {
  return (
    <>
      <Navigation/>
      <h1>Base Layout</h1>
      <main>
        <Outlet/>
      </main>
    </>
  );
}