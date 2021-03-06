import React from 'react';
import lupa from "../../assets/lupa.svg";
import {Link} from "react-router-dom";

const Result = () => {
  return (
    <Link className="findEl__input" to="/result">
      <img src={lupa} alt="Lupa"/>
      <span>Search</span>
    </Link>
  );
};

export default Result;
