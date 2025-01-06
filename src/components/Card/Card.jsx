import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container1">
      <div className="card-container">
        <img src="../Avatar group.png" className="groupimg" alt="" />
        <div className="card-body">
          <h5 className="card-title">Still have questions?</h5>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button type="button" className="button2">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
