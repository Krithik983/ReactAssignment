import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <div className="pb-2 border-bottom"></div>
      <p className="title">Features</p>
      <center>
        <h2 className="heading1">
          Analytics that feels like it’s from the future
        </h2>
        <p className="para">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </center>

      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 row1">
        <center>
          <img src="../Featured icon.png" alt="" className="feature1" />

          <h3 className="text-body-emphasis textsize">Share team inboxes</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
        </center>
        <div className="feature col">
          <center>
            <img src="../Featured icon (1).png" alt="" className="feature1" />
            <h3 className="text-body-emphasis textsize">
              Deliver instant answers
            </h3>
            <p>
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </center>
        </div>
        <div className="feature col">
          <center>
            <img src="../Featured icon (2).png" alt="" className="feature1" />
            <h3 className="text-body-emphasis textsize">
              Manage your team with reports
            </h3>
            <p>
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </center>
        </div>
        <div className="feature col">
          <center>
            <img src="../Featured icon (3).png" alt="" className="feature1" />
            <h3 className="text-body-emphasis textsize">
              Connect with customers
            </h3>
            <p>
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </center>
        </div>
        <div className="feature col">
          <center>
            <img src="../Featured icon (4).png" alt="" className="feature1" />
            <h3 className="text-body-emphasis textsize">
              Connect the tool you already use
            </h3>
            <p>
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </center>
        </div>
        <div className="feature col">
          <center>
            <img src="../Featured icon (5).png" alt="" className="feature1" />
            <h3 className="text-body-emphasis textsize">
              Our people make the difference
            </h3>
            <p>
              We’re an extension of your customer service team, and all of our
              resources are free. Chat to our friendly team 24/7 when you need
              help.
            </p>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Features;
