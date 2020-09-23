import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokeObject, setPokemon] = useState(null);

  return (
    <PokemonContext.Provider value={[pokeObject, setPokemon]}>
      {props.children}
    </PokemonContext.Provider>
  );
};
