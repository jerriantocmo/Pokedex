import React, { useState, useEffect } from "react";

import EvolutionSelector from "./EvolutionSelector/EvolutionSelector.js";
import StatsChart from "./StatsChart/StatsChart";
import Physical from "./Physical/Physical";

const Pokemon = () => {
  return (
    <div>
      <div>
        <EvolutionSelector />
      </div>
      <div className="main">
        <div className="col">
          <img src="" alt="" />
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
