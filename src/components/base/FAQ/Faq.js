import React, { useState } from 'react';
import './faq.css'; // Import CSS file for styling

function FAQ() {
  // Define your FAQ data
  const faqs = [
    {
      question: "Q1.. Why should i invest on Arbian Ranches?",
      answer: "React is a JavaScript library for building user interfaces, React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces.",
    },
    {
      question: "Q2.. When will Arabian Ranches Developed Fully?",
      answer: "React is a JavaScript library for building user interfaces, React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces, React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces",
    },
     {
      question: "Q3.. Is Arabian Ranches have educational system for childerns?",
      answer: "React is a JavaScript library for building user interfaces, React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces, React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces React is a JavaScript library for building user interfaces",
    },
    // Add more FAQ items as needed
  ];

  // State to keep track of the active FAQ item
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the active FAQ item
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions (FAQs)</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
                <span  style={{color:"black", fontSize:"36px"}}>
                {activeIndex === index ? "-" : "+"}
                </span>            
                </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
