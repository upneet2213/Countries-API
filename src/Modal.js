import React from "react";

const Modal = ({ item }) => {
  const { flag, name, population, region, capital } = item;
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="img-container">
          <img src={flag} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
