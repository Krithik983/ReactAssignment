import React from "react";
import "./Trail.css";

const Trail = () => {
  return (
    <div className="trail-container">
      <div className="text-container">
        <h1>Start your free trail</h1>
        <p>Join over 4,000+ startups already growing with Zysk</p>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-lg px-4 gap-3 button1">
          Learn more
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4 button2"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Trail;

/* <h1 className="heading">Start your free trial</h1>
      <p className="para">
        Join over 4,000+ startups already growing with Zysk
      </p>*/
