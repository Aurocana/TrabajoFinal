import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContainerCard from "./components/ContainerCard";
import MovieDetail from "./components/MovieDetail";
import Header from "./components/Header";
import MovieProvider from "./context/Movie";
import Home from "./components/Home";
import Busqueda from "./components/Busqueda";
import Footer from "./components/Footer";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<ContainerCard tipo="popular" />} />
          <Route
            path="/ultimoslanzamientos"
            element={<ContainerCard tipo="ultimos" />}
          />
          <Route path="/Busqueda" element={<Busqueda />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </Router>
    </MovieProvider>
  );
}

export default App;
