import React from "react";
import data from "../../helper/data";
import Cards from "../cards/Cards.jsx";
import "./CardContainer.css";

const CardContainer = (props) => {
  const { count } = props;

  return (
    <div className="CardContainer">
      {data.slice(count, count + 5).map((item) => {
        // console.log(item);
        return (
          <Cards
            key={item.id}
            name={item.name}
            age={item.age}
            image={item.image}
            email={item.email}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
