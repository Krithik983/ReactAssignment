import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <center>
        <img src="../Fictional company logo.png" alt="" className="company" />
        <h1 className="heading">
          We've been using Sisyphus to kick start every new project and can't
          imagine working without it.
        </h1>
        <img src="../Avatar (1).png" alt="" className="avatar" />
        <h4>Candice Wu</h4>
        <p>Product Manager, Sisyphus</p>
      </center>
    </div>
  );
};

export default Testimonial;
