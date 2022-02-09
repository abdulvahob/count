import React, { useState } from "react";
import "./SamePartBolck.css";

const SamePartBolck = (props) => {
  return (
    <div>
      <div className="SamePartBolck">
        <div className="SamePartBolck-plus ">
         <div className="hover-zoom">
         <img
            src={props.data.src}
            alt=""
            style={{ overflow: "hidden" }}
            onMouseOver={(e) =>
              (e.currentTarget.style = {
                transform: "scale(1.25)",
                overflow: "hidden",
              })
            }
            onMouseOut={(e) =>
              (e.currentTarget.style = {
                transform: "scale(1)",
                overflow: "hidden",
              })
            }
          />
         </div>
        </div>
      </div>
    </div>
  );
};

export default SamePartBolck;
