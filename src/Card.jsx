import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container1">
      <img src="../Avatar group.png" className="groupimg" alt="" />
      <div className="card-body">
        <h5 className="card-title">Still have questions?</h5>
        <p className="card-text">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button type="button" className="btn btn-primary button2">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Card;
