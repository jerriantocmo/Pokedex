import React, { useState, useEffect } from "react";

import "./StatsChart.css";
import { capitalize } from "../../utility/capital";

const StatsChart = ({ stats }) => {
  return (
    <div className="stats">
      <ul>
        {stats.map((e) => (
          <li>{capitalize(e.stat.name) + ": " + e.base_stat}</li>
        ))}
      </ul>
    </div>
  );
};

export default StatsChart;
