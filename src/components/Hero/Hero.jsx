import React from "react";
import { LuCirclePlay } from "react-icons/lu";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="my-5 text-center hero-container">
      <div className="custom-button">
        <span className="feature-badge">New feature</span>
        <span className="button-text">
          Check out the team dashboard <span className="arrow">→</span>
        </span>
      </div>

      <div className="txt-container">
        <h1>Beautiful analytics to grow smarter</h1>
      </div>
      <p>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="button-group">
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4 button-demo"
        >
          <span className="button-icon">
            <LuCirclePlay />
          </span>
          Demo
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4 button"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Hero;
