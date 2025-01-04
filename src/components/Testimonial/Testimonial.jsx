import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="test-container">
        <img src="../Fictional company logo.png" alt="" className="company" />

        <h1>
          We've been using Sisyphus to kick start every new project and can't
          imagine working without it.
        </h1>

        <img src="../Avatar (1).png" alt="" className="avatar" />
        <h4>Candice Wu</h4>
        <p>Product Manager, Sisyphus</p>
      </div>
    </div>
  );
};

export default Testimonial;
