import React from 'react';
import { Outlet } from "react-router";

export default function BaseLayout() {
  return (
    <>
      <h1>Base Layout</h1>
      <main>
        <Outlet/>
      </main>
    </>
  );
}