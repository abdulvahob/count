import React from "react";
import "./SamepartSwipper.css";
const SamepartSwipper = (props) => {
  return (
    <ul className="SamepartSwipper">
      {props.data.options.map((el, index) => (
        <li key={index}>
          <img
            src={el.src}
            alt="salom"
            onClick={(e) => {
              props.mall(e, el, index);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default SamepartSwipper;
