import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: "https://i.ibb.co.com/hCjfW0R/960x0.webp", // replace with actual icon
      title: "Create an Assignment",
      description: "Start by creating an assignment. Add the required details and share it with your group.",
    },
    {
      id: 2,
      icon: "https://i.ibb.co.com/TKbg2QK/images-26.jpg", // replace with actual icon
      title: "Collaborate and Complete",
      description: "Work with your group members to complete the assignment and submit it through the platform.",
    },
    {
      id: 3,
      icon: "https://i.ibb.co.com/jGZHmWx/images-21.jpg", // replace with actual icon
      title: "Peer Review and Grade",
      description: "Review and grade the assignments submitted by your peers for continuous learning.",
    },
  ];

  return (
    <section className=" py-16 px-2">
      <div className="container mx-auto text-center px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-lg mb-12">
          A simple, step-by-step guide to get started with our platform and make the most out of group learning.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              {/* Step Icon */}
              <div className="rounded-lg mx-auto mb-4">
                <img src={step.icon} alt={step.title} className="w-full h-60 rounded-xl object-contain" />
              </div>
              {/* Step Title */}
              <h3 className="text-xl font-semibold light:text-gray-800 mb-2">{step.title}</h3>
              {/* Step Description */}
              <p className="light:text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
