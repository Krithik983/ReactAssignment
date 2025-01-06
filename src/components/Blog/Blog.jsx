import React from "react";
import "./Blog.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const cardData = [
  {
    image: "../Image.png",
    category: "Design",
    title: "UX review presentations",
    text: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    avatar: "../Avatar (2).png",
    author: "Olivia Rhye",
    date: "20 Jan 2024",
  },
  {
    image: "../Image (1).png",
    category: "Product",
    title: "Migration to Linear 101",
    text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    avatar: "../Avatar (3).png",
    author: "Phoenix Baker",
    date: "19 Jan 2024",
  },
  {
    image: "../Image (2).png",
    category: "Software Engineering",
    title: "Building your API stack",
    text: "The reise of RESTful APIs has been met by a rise in tools of creating, testing, and managing them.",
    avatar: "../Avatar (4).png",
    author: "Lana Steiner",
    date: "18 Jan 2024",
  },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="header-container">
        <div className="blog-header">
          <div className="header-text">
            <h5>Our blog</h5>
            <h1>Latest blog posts</h1>
            <span className="small-heading">
              <p>
                Tools and strategies modern teams need to help their companies
                grow.
              </p>
            </span>
          </div>
          <button className="view-posts-button">View all posts</button>
        </div>
      </div>
      <div className="blog-post-container">
        {cardData.map((card, index) => (
          <div className="card-1" key={index}>
            <img src={card.image} className="card-img-top" alt="" />
            <div className="card-category-text">
              <p>{card.category}</p>
              <div className="card-title-row">
                <h2>{card.title}</h2>
                <a href="#" className="open-link">
                  <MdOutlineArrowOutward />
                </a>
              </div>
              <div className="card-text-body">
                <p>{card.text}</p>
              </div>
              <div className="card-footer-sec">
                <img src={card.avatar} alt="Avatar" />
                <div className="author">
                  <p>{card.author}</p>

                  <span className="date1">{card.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="button-view">View all posts</button>
    </div>
  );
};

export default Blog;
