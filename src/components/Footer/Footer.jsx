import React from "react";
import "./Footer.css";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Overview", href: "#" },
        { label: "Features", href: "#" },
        { label: "Solutions", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Releases", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "News", href: "#" },
        { label: "Media kit", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Newsletter", href: "#" },
        { label: "Events", href: "#" },
        { label: "Help centre", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
    {
      title: "Use cases",
      links: [
        { label: "Startups", href: "#" },
        { label: "Enterprise", href: "#" },
        { label: "Government", href: "#" },
        { label: "SaaS centre", href: "#" },
        { label: "Marketplaces", href: "#" },
        { label: "Ecommerce", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Twitter", href: "#" },
        { label: "Linkedin", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "GitHub", href: "#" },
        { label: "AngelList", href: "#" },
        { label: "Dribbble", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" },
        { label: "Cookies", href: "#" },
        { label: "Licenses", href: "#" },
        { label: "Settings", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <div>
      <div className="footer-container">
        <footer className="inner-container">
          <div className="row">
            {footerSections.map((section, index) => (
              <div key={index} className="col-md-2 mb-3 section">
                <h5>{section.title}</h5>
                <ul className="nav flex-column">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="nav-item mb-2">
                      <a
                        href={link.href}
                        className="nav-link p-0 text-body-secondary link1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-top company-details">
            <img src="../Group 160.png" alt="" className="main-logo" />
            <p>© 2077 Zysktechnologies. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
