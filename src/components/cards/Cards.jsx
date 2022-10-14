// import React from "react";
import "./Cards.css";
import { useState } from "react";

const Cards = ({ name, age, image, email }) => {
  console.log(email);
  const [showHint, setshowHint] = useState(true);

  const cardHandle = () => {
    setshowHint(!showHint);
    console.log(showHint);
  };
  if (showHint) {
    return (
      <div className="card" onClick={cardHandle}>
        <img src={image} alt="" />
        <div className="content">
          <h2>{name}</h2>
          <h2>Age : {age}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card1" onClick={cardHandle}>
        <h2>{name}</h2>
        <h3>languages:JavaScript(React / Vue / Angular)</h3>
        <h3>Email : {email}</h3>
        <h3>Age : {age}</h3>
      </div>
    );
  }
};

export default Cards;
