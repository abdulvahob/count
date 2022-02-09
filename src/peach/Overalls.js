import React, { useState, useEffect } from "react";
import InfoBlock from "../components/InfoBlock";
import SamePart from "../components/SamePart";
import SamepartSwipper from "../components/SamepartSwipper";
import "./Overalls.css";
const Overalls = () => {
  const [data, setData] = useState({
    src: "http://picture-cdn.wheretoget.it/oabrfs-l-610x610-cardigan-clother-grey-random-clothes-men-style-fashion-women-niall+horan.jpg",
    options: [
      {
        color: "red",
        price: 124,
        status: true,
        src: "http://picture-cdn.wheretoget.it/oabrfs-l-610x610-cardigan-clother-grey-random-clothes-men-style-fashion-women-niall+horan.jpg",
        img: [
          {
            src: "http://picture-cdn.wheretoget.it/oabrfs-l-610x610-cardigan-clother-grey-random-clothes-men-style-fashion-women-niall+horan.jpg",
            img2: "https://images.wbstatic.net/big/new/32190000/32197207-1.jpg",
          },
        ],
      },
      {
        color: "blue",
        price: 204,
        status: false,
        src: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sad3e54383e170ad9/image/i647d1d2b22febc8f/version/1636074776/image.jpg",
        img: [
          {
            src: "https://images.wbstatic.net/big/new/32190000/32197207-2.jpg",
            img2: "https://images.wbstatic.net/big/new/32190000/32197207-1.jpg",
          },
        ],
      },
      {
        color: "blue",
        price: 100,
        status: false,
        src: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sad3e54383e170ad9/image/ide2c1be76b960363/version/1636074776/image.jpg",
        img: [
          {
            src: "https://images.wbstatic.net/big/new/32190000/32197207-2.jpg",
            img2: "https://images.wbstatic.net/big/new/32190000/32197207-1.jpg",
          },
        ],
      },
    ],
  });
  const DataChangeHandler = (e, el, index) => {
    console.log(index);
    let update = { ...data };
    update.src = el.src;
    setData(update);
  };
  console.log(data);
  return (
    <div className="overalls">
      <div className="container">
        <SamePart
          data={data}
          changed={(e, el) => {
            setData(el);
          }}
          mall={(e, el, index) => {
            DataChangeHandler(e, el, index);
          }}
        />
        <InfoBlock
          data={data}
          changed={(e, el, index) => {
            DataChangeHandler(e, el, index);
          }}
        />
      </div>
    </div>
  );
};

export default Overalls;
