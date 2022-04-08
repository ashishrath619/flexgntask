import React from "react";
import Icon from "../Assests/wt_icon.svg";
import "./floatingicon.css";
export default function FloatingIcon() {
  return (
    <div>
      <div
        style={{
          //   fontSize: "10px",
          right: "20px",
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          marginTop: "420px",
          bottom: "6vh",
          color: "black",
          transition: "1000",
        }}
      >
        <a href="https://wa.me/919039399964/?text=I%20am%20intrested%20about%20in%20your%20profile">
          <img src={Icon} alt="" width="50" className="floticon" />
        </a>
      </div>
    </div>
  );
}
