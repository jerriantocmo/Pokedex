import React, { useState, useEffect, useContext } from "react";

import EvolutionSelector from "./EvolutionSelector/EvolutionSelector.js";
import StatsChart from "./StatsChart/StatsChart";
import Physical from "./Physical/Physical";
import axios from "./Api";

import { PokemonContext } from "../PokemonContext";
import { InputContext } from "../InputContext";

import "./Pokemon.css";

const Pokemon = () => {
  const [input, setInput] = useContext(InputContext);
  const [pokeObject, setPokemon] = useContext(PokemonContext);

  useEffect(() => {
    console.log("input", input);
    if (input) {
      axios
        .get(`/pokemon/${input}`)
        .then((res) => {
          setPokemon(res.data);
        })
        .then(() => {
          console.log("Pokemon Object", pokeObject);
        })
        .catch(() => {
          console.log("There was an error!");
        });
    }
  }, [input]);

  return (
    <div className="pokedex">
      <div className="header">
        <h1>
          {pokeObject
            ? pokeObject.forms[0].name.charAt(0).toUpperCase() +
              pokeObject.forms[0].name.slice(1)
            : ""}
        </h1>
      </div>

      <div>
        <EvolutionSelector />
      </div>

      <div className="main">
        <div className="col">
          <img
            src={
              pokeObject
                ? pokeObject.sprites.other["official-artwork"].front_default
                : ""
            }
            alt=""
          />
          <StatsChart />
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia,
            dolor doloribus suscipit quibusdam tenetur cum. Ipsum voluptatem
            consectetur alias nulla quod esse illo illum tenetur optio velit,
            deleniti ad quibusdam, cupiditate quidem sunt aut repellendus in
            praesentium unde, earum placeat eaque possimus odit adipisci. Maxime
            nisi autem fuga eius.
          </p>
          <Physical />
          {/* Type */}
          <ul></ul>
          {/* Weakness */}
          <ul></ul>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
