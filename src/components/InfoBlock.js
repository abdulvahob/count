import React from "react";
import InfoSwipper from "./InfoSwipper";
import './InfoBlock.css'
const InfoBlock = () => {
  return (
    <div className="InfoBlock">
      <p className="cost">4 749 $</p>
      <p className="InfoBlock-text">
        "Цвет:" <span>черный</span>{" "}
      </p>
      {/* <InfoSwipper/>  */}
      <div>
          <InfoSwipper/>
      </div>
      <br />

      <a href="#">Таблица размеров</a>
      <ul>
        <li>92</li>
        <li>98</li>
        <li>108</li>
        <li>110</li>
        <li>116</li>
        <li>112</li>
      </ul>
      <button>Добавить в корзину</button>
      
    </div>
  );
};

export default InfoBlock;
