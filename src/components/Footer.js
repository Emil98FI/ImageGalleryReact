import React from "react"
import Image from "../pictures/gallerypic.jpg"
const Footer = (props) => (
  <div className="footer" style={props.style}>
    <h1 style={{ margin: "25px 5px 75px 75px" }}>
      This is where you will find your saved photos
    </h1>
    <img
      style={{ margin: "-4% 100px 75px 75px" }}
      src={Image}
      alt="Example"
      width="180"
      height="180"
    />
  </div>
)

export default Footer
