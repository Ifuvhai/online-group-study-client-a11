import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: "step1-icon.png", // replace with actual icon
      title: "Create an Assignment",
      description: "Start by creating an assignment. Add the required details and share it with your group.",
    },
    {
      id: 2,
      icon: "step2-icon.png", // replace with actual icon
      title: "Collaborate and Complete",
      description: "Work with your group members to complete the assignment and submit it through the platform.",
    },
    {
      id: 3,
      icon: "step3-icon.png", // replace with actual icon
      title: "Peer Review and Grade",
      description: "Review and grade the assignments submitted by your peers for continuous learning.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          A simple, step-by-step guide to get started with our platform and make the most out of group learning.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              {/* Step Icon */}
              <div className="w-20 h-20 mx-auto mb-4">
                <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
              </div>
              {/* Step Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              {/* Step Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
