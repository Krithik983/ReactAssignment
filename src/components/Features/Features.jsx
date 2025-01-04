import React from "react";
import "./Features.css";

const featuresData = [
  {
    imgSrc: "../Featured icon.png",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    imgSrc: "../Featured icon (1).png",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    imgSrc: "../Featured icon (2).png",
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    imgSrc: "../Featured icon (3).png",
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    imgSrc: "../Featured icon (4).png",
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    imgSrc: "../Featured icon (5).png",
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

const Features = () => {
  return (
    <div className="container-feature">
      <div className="feature-container">
        <p className="title">Features</p>
        <center>
          <h2 className="heading1">
            Analytics that feels like it’s from the future
          </h2>
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </center>
      </div>
      <div className="row py-5 row-cols-1 row-cols-lg-3">
        {featuresData.map((feature, index) => (
          <div className="feature col" key={index}>
            <center>
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="feature1"
              />
              <h3 className="text-body-emphasis textsize">{feature.title}</h3>
              <p>{feature.description}</p>
            </center>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
