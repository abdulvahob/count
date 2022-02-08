import React , {useState} from "react";
import "./SamePartBolck.css";
import img1 from "../img/kutubhona/1.jpg";

const SamePartBolck = () => {

    const [mouse , mouseZoom] =  useState()

    function onMouse(e){
        const x  = e.clientX - e.target.offsetLeft;
        const y  = e.clientX - e.target.offsetTop;
    }


  return (
    <div className="SamePartBolck">
      <div className="SamePartBolck-plus">
        <img onClick={onMouse} src={img1} alt="" />
      </div>
    </div>
  );
};

export default SamePartBolck;
