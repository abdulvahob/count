import React, {useState} from "react";
import InfoSwipper from "./InfoSwipper";
import './InfoBlock.css'
const InfoBlock = (props) => {
  const [size, setSize]= useState([
    {size:92, status: false },
    {size:95, status: false },
    {size:98, status: false },
    {size:102, status: false },
    {size:110, status: false },
  ])
  const ChangeHandler= (e, el, index)=>{
    const update = [...size]
    for(let i =0; i< size.length; i++){
      update[i].status = false
    }
    update[index].status = true
    setSize(update)
  }
  return (
    <div className="InfoBlock">
      <p className="cost">4 749 $</p>
      <p className="InfoBlock-text">
        "Цвет:" <span>черный</span>{" "}
      </p>
      {/* <InfoSwipper/>  */}
      <div>
          <InfoSwipper data={props.data} changed={props.changed} />
      </div>
      <br />

      <a href="#">Таблица размеров</a>
      <ul>
        {size.map((el, index)=>(
          <li key={index} className={el.status ? 'size': ''} onClick={(e)=>{ChangeHandler(e, el, index)}}>{el.size}</li>
        ))}
      </ul>
      <button>Добавить в корзину</button>
    </div>
  );
};

export default InfoBlock;
