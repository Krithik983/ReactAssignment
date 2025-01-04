import React from "react";
import "./Social.css";

const imageData = [
  {
    image: "../Fictional company logo first.png",
  },
  {
    image: "../Fictional company logo (1).png",
  },
  {
    image: "../Fictional company logo (2).png",
  },
  {
    image: "../Fictional company logo (3).png",
  },
  {
    image: "../Fictional company logo (4).png",
  },
  {
    image: "../Fictional company logo (5).png",
  },
];

const Social = () => {
  return (
    <div className="social-container">
      <center>
        <img src="../Content.png" alt="" className="social-desktop" />
        <img src="../social.png" alt="" className="social-mobile" />
      </center>

      <p className="para">Join 4,000+ companies already growing</p>
      <div className="logo-container">
        {imageData.map((img, index) => (
          <div className="logos" key={index}>
            <img src={img.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
