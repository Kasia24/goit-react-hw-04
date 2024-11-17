import React from "react";
import { Oval } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => (
  <div className="loader">
    <Oval color="#3b5bdb" height={50} width={50} />
  </div>
);

export default Loader;
