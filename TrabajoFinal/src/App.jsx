

import React, { useState, useEffect } from "react";
import "./App.css";
import ContainerCard from "./components/ContainerCard";
import Header from './components/Header'

import axios from "axios";




function App() {


  return (
    <>

      <ContainerCard />

      <Header />
      <Home />

    </>

  );
}

export default App;