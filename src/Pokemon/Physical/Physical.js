import React, { useState, useEffect } from "react";
import "./Physical.css";

const Physical = (props) => {
  return (
    <div className="physicalContainer">
      <div className="col">
        <div className="stat">
          <h4>Height</h4>
          <span>Data</span>
        </div>
        <div className="stat">
          <h4>Weight</h4>
          <span>Data</span>
        </div>
        <div className="stat">
          <h4>Gender</h4>
          <span>Data</span>
        </div>
      </div>
      <div className="col">
        <div className="stat">
          <h4>Category</h4>
          <span>Data</span>
        </div>
        <div className="stat">
          <h4>Abilities</h4>
          <span>Data</span>
        </div>
      </div>
    </div>
  );
};

export default Physical;
