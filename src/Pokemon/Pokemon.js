import React, { useState, useEffect, useContext } from "react";

import StatsChart from "./StatsChart/StatsChart";
import Physical from "./Physical/Physical";
import TypeList from "./TypeList/TypeList";
import axios from "./Api";

import { PokemonContext } from "../PokemonContext";
import { InputContext } from "../InputContext";

import "./Pokemon.css";

import { capitalize } from "../utility/capital";

// const capitalize = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

const Pokemon = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [input, setInput] = useContext(InputContext);
  const [pokeObject, setPokemon] = useContext(PokemonContext);
  const [pokeType, setPokeType] = useState(null);
  const [pokeType, setPokeType] = useState(null);

  useEffect(() => {
    console.log(pokeObject, "pokeObject");
    if (input) {
      setLoading(true);
      console.log("this runs");
      axios
        .get(`/pokemon/${input.toLowerCase()}`)
        .then((res) => {
          setPokemon(res.data);
          setLoading(false);
          setLoading2(true);
          axios
            .get(`/pokemon-species/${res.data.id}`)
            .then((res) => {
              console.log(res.data);
              setPokeType(res.data);
              setLoading2(false);
            })
            .catch(() => {
              console.log("There was an error! 2");
            });
        })
        .then(() => {
          console.log(pokeObject);
        })
        .catch((err) => {
          console.log(err);
          console.log("There was an error!");
        });
    }
  }, [input]);

  return loading || loading2 ? (
    <p>Loading</p>
  ) : pokeObject ? (
    <div className="pokedexContainer">
      <div className="pokedex">
        <div className="header">
          <h1>{pokeObject ? capitalize(pokeObject.forms[0].name) : ""}</h1>
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
            <StatsChart stats={pokeObject.stats} />
          </div>
          <div className="description">
            <p>
              {pokeType
                ? pokeType.flavor_text_entries[0].flavor_text.replace(
                    /(\r\f|\f|\r)/gm,
                    " "
                  )
                : ""}
            </p>
            <Physical props={pokeObject}/>
            {/* Type */}
            <ul>
              Type
              <li>{pokeObject?pokeObject.types[0].type.name: ""}</li>
            </ul>
            {/* Weakness */}
            <ul>
              Weakness
              <li>{pokeObject?pokeObject.types[1]?.type.name || "Yolo": ""}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <br />
      <div>Enter a pokemon</div>
    </div>
  );
};

export default Pokemon;
