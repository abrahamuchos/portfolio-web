import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

import ScrollToTop from "./hooks/ScrollToTop.jsx";

import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/:slug" element={<ProjectDetail />}/>
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
