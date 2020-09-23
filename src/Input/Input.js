import React, { useState, useContext } from "react";

import { InputContext } from "../InputContext";

const Input = () => {
  const [input, setInput] = useContext(InputContext);

  return (
    <div>
      <input
        placeholder="Enter pokemon here"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
