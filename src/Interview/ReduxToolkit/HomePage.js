import React from "react";
import InputComponent from "./InputComponent";
import Lists from "./Lists";
import "./tsStyles.css";

const HomePage = () => {
  return (
    <div class="flex flex-col gap-20 mt-8">
      <InputComponent />
      <Lists />
    </div>
  );
};

export default HomePage;
