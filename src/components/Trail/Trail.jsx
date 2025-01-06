import React from "react";
import "./Trail.css";

const Trail = () => {
  return (
    <div className="trail-container">
      <div className="text-con">
        <h1>Start your free trail</h1>
        <p>Join over 4,000+ startups already growing with Zysk</p>
      </div>
      <div className="button-container-trail">
        <button type="button" className="learn-button">
          Learn more
        </button>
        <button type="button" className="get-started-button">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Trail;
