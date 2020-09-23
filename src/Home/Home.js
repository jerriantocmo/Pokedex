import React, { useState, useEffect } from "react";

import Input from "../Input/Input";
import Pokemon from "../Pokemon/Pokemon";
// import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Input></Input>
      <Pokemon />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
