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
  const [loading3, setLoading3] = useState(false);
  const [input, setInput] = useContext(InputContext);
  const [pokeObject, setPokemon] = useContext(PokemonContext);
  const [pokeSpecies, setPokeSpecies] = useState(null);
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
          setLoading3(true);
          axios
            .get(`/pokemon-species/${input.toLowerCase()}`)
            .then((res) => {
              console.log(res.data);
              setPokeSpecies(res.data);
              setLoading2(false);
              axios
                .get(`/type/${input.toLowerCase()}`)
                .then((res) => {
                console.log(res.data);
                setPokeType(res.data);
                setLoading3(false);
                })
                .catch(() => {
                  console.log("There was an error! 3");
                });
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
            <div className="descriptionSummary">
              <p>
                {pokeSpecies
                  ? pokeSpecies.flavor_text_entries[0].flavor_text.replace(
                      /(\r\f|\f|\r)/gm,
                      " "
                    )
                  : ""}
              </p>
            </div>
            <Physical props={pokeObject}/>
            {/* Type */}

            <div className="typeAndWeaknessContainer">
              <h4>Type</h4>
              <ul className="typeListItemsContainer">
                <ul className="typeListItemsContainer">
                {pokeObject?.types.map((type) => (
                    <li>{type.type.name}</li>
                ))}
              </ul>
              </ul>
              <h4>Weakness</h4>
              <ul className="typeListItemsContainer">
                {pokeType?.damage_relations.double_damage_from.map((type) => (
                  <li>{type.name}</li>
                ))}
              </ul>
            </div>
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
