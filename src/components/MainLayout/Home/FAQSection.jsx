import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is this platform about?",
      answer:
        "This platform is designed to help groups collaborate on assignments, share feedback, and improve learning through peer reviews and online tools.",
    },
    {
      question: "How do I submit an assignment?",
      answer:
        "You can submit an assignment by navigating to the 'Submit Assignment' page, providing the required details, and uploading your Google Docs link.",
    },
    {
      question: "Who can grade my assignments?",
      answer:
        "Assignments can be graded by your peers or designated examiners. However, you cannot grade your own submissions.",
    },
    {
      question: "Is this platform free to use?",
      answer:
        "Yes, this platform is completely free for students and educational institutions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="light:bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold light:text-gray-800 text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg light:text-gray-600 text-center mb-12">
          Find answers to the most common questions about our platform.
        </p>

        {/* FAQ Items */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-medium text-gray-800 flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <span className="text-gray-500">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {/* Answer */}
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-600 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
