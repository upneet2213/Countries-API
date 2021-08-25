import React from "react";
import Modal from "./Modal";

const Country = ({ item, showModal }) => {
  const { flag, name, population, region, capital } = item;
  //   console.log(item);
  return (
    <div className="country">
      <img src={flag} alt="" />
      <div className="country-info">
        <div className="name">
          <h4>{name}</h4>
        </div>
        <div className="info-footer">
          <div className="element">
            <h4>Population:</h4>
            <p>{population}</p>
          </div>
          <div className="element">
            <h4>Region:</h4>
            {region}
          </div>
          <div className="element">
            <h4>Capital:</h4>
            {capital}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
