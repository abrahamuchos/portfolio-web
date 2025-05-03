

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import BaseLayout from "./layouts/BaseLayout.jsx";

import './App.css'
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
        </Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
