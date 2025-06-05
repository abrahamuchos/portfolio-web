import { BrowserRouter, Route, Routes } from "react-router";
import { ReactLenis } from 'lenis/react'

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";
import ScrollToTop from "./hooks/ScrollToTop.jsx";
import ProjectDetailLayout from "./layouts/ProjectDetailLayout.jsx";
import QrlStrategy from "./components/projects/QrlStrategy.jsx";
import SuiteUpcm from "./components/projects/SuiteUpcm.jsx";

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
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
