import { BrowserRouter, Route, Routes } from "react-router";
import { ReactLenis } from 'lenis/react'

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";
import ScrollToTop from "./hooks/ScrollToTop.jsx";
import ProjectDetailLayout from "./layouts/ProjectDetailLayout.jsx";
import QrlStrategy from "./components/projects/QrlStrategy.jsx";
import SuiteUpcm from "./components/projects/SuiteUpcm.jsx";
import RestaurantTdd from "./components/projects/RestaurantTdd.jsx";
import Comgrafic from "./components/projects/Comgrafic.jsx";
import Diverxo from "./components/projects/Diverxo.jsx";

import './styles/App.css'
import 'lenis/dist/lenis.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <ReactLenis root />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>

          <Route path="/projects" element={<ProjectDetailLayout />}>
            <Route path="el-latido-silencioso-de-un-problema" element={<SuiteUpcm />}/>
            <Route path="mi-aventura-con-qrl-strategy" element={<QrlStrategy />}/>
            <Route path="explorando-tdd-en-el-back-end" element={<RestaurantTdd />}/>
            <Route path="comgrafic-su-presencia-digital" element={<Comgrafic />}/>
            <Route path="mercado-del-arte-en-venezuela" element={<Diverxo />}/>
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
