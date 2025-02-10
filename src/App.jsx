import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio/inicio";
import Filmes from "./pages/filmes/filmes";
import Series from "./pages/series/series";
import HQs from "./pages/hqs/hqs";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="menu-navegacao">
          <nav>
            <ul>
              <li><a href="/inicio">Início</a></li>
              <li><a href="/filmes">Filmes</a></li>
              <li><a href="/series">Séries</a></li>
              <li><a href="/hqs">HQs</a></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/inicio" element={<Inicio />} /> 
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/hqs" element={<HQs />} />
        </Routes>
      </div>
    </Router>
  );
}



