import React from "react";
import "./Trail.css";

const Trail = () => {
  return (
    <div className="trail-container">
      <div className="trail-con">
        <div className="text-con">
          <h1>Start your free trail</h1>
          <p>Join over 4,000+ startups already growing with Zysk</p>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="learn-button">
            Learn more
          </button>
          <button type="button" className="get-started-button">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trail;

/* <h1 className="heading">Start your free trial</h1>
      <p className="para">
        Join over 4,000+ startups already growing with Zysk
      </p>*/
