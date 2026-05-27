import React, { useState, useEffect } from "react";

import Input from "../Input/Input";
import Pokemon from "../Pokemon/Pokemon";
// import Footer from "./Footer/Footer";
import { PokemonProvider } from "../PokemonContext";
import "./Home.css";

const Home = () => {
  return (
    <PokemonProvider>
      <div className="homeContainer">
        <h1>Home</h1>
        <Input></Input>
        <Pokemon />
        {/* <Footer /> */}
      </div>
    </PokemonProvider>
  );
};

export default Home;
