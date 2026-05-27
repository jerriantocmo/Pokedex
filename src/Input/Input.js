import React, { useState, useContext } from "react";

import { InputContext } from "../InputContext";
import "./Input.css";

const Input = () => {
  const [inputText, setInputText] = useState("");
  const [input, setInput] = useContext(InputContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setInput(inputText);
        setInputText("");
      }}
    >
      <input
        placeholder="Enter pokemon here"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button type="submit" value="search">
        Search
      </button>
    </form>
  );
};

export default Input;
