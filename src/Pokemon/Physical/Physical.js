import React, { useState, useEffect } from "react";
import "./Physical.css";
import {decToFeet} from "../../utility/decToFeet";

const Physical = ({ props }) => {
  return (
    <div className="physicalContainer">
      <div >
        <div className="stat">
          <h4>Height</h4>
          <span>{props? decToFeet(props.height) : ""}</span>
        </div>
        <div className="stat">
          <h4>Weight</h4>
          <span>{props? props.weight : ""}</span>
        </div>
        <div className="stat">
          <h4>Gender</h4>
          <span>Data</span>
        </div>
      </div>
      <div >
        <div className="stat">
          <h4>Category</h4>
          <span>Data</span>
        </div>
        <div className="stat">
          <h4>Abilities</h4>
          <li>{props? props.abilities[0]?.ability.name : ""}</li>
        </div>
      </div>
    </div>
  );
};

export default Physical;
