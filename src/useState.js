import React, { useState, useEffect } from "react";

import "./App.css";

// function Upfun(){
//     console.log('salom ');
//     return Math.trunc(Math.random()*30)
// }

const App = () => {
  const [counrt, setCount] = useState();


  const [mall , setMall] = useState({
      text:'salom',
      num: 234,
  })

  function mallFilter(){
      setMall((prev)=>{
          return{
            ...prev,
            text:'hello world'
          }
      })
  }

  function countFun1() {
    if (counrt < 10) {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    } else {
      setCount(10);
    }
  }
  function countFun2() {
    setCount((prev) => prev - 1);
  }

  useEffect(()=>{
      console.log('salom dunyo');
  } , [counrt])

  return (
    <div className="App">
      <h1>salom dunyo {counrt} </h1>
      <button onClick={countFun1} className="btn btn-dark">
        ok +
      </button>
      <button onClick={countFun2} className="btn btn-primary">
        ok -
      </button>
      <button onClick={mallFilter} className="btn btn-secondary">object</button>
      <pre>{JSON.stringify(mall , null , 2)}</pre>
    </div>
  );
};

export default App;
 