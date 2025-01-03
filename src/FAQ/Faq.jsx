import { React, useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can change your plan at any time through your account settings.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel anytime, and your subscription will stop at the end of your billing period.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, additional information can be added during checkout or in your account settings.",
    },
    {
      question: "How does billing work?",
      answer: "We bill annually or monthly, depending on the plan you choose.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your email in the account settings section.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Frequently asked questions</h2>
      <p>Everything you need to know about the product and billing.</p>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className={`faq-answer ${
                activeIndex === index ? "show-answer" : ""
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
