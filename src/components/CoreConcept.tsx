/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useState, useEffect } from "react";

const CoreConcept = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState(1);
  // State for counter values
  const [, setCounterValues] = useState({
    projectsCompleted: 0,
    successRate: 0,
    teamExperts: 0,
    yearsExperience: 0,
  });

  // Tab content data
  const tabContents = [
    {
      id: 1,
      title: "Mission",
      description:
        "To unite and engage experts, align efforts, and drive our agenda through strategic partnerships and collaboration:",
      items: [
        "Partner with credible organizations and platforms",
        "Involve leaders and experts for effective decision-making",
        "Provide research-based recommendations",
        "Offer proven methodologies for strategic development",
        "Rapid Prototyping",
        "Continuous Integration",
      ],
    },
    {
      id: 2,
      title: "Vission",
      description:
        "To build a leading forum for leaders and experts, empowering executives to overcome current and future challenges by connecting them to a broad business network:",
      items: [
        "Enhance leadership capacity for future challenges",
        "Connect executives to a vast professional network",
        "Foster cross-sector collaboration",
        "Rapid Prototyping",
        "Continuous Integration",
      ],
    },
    {
      id: 3,
      title: "Values",
      description:
        "Our core values guide our actions and decisions for collective benefit:",
      items: [
        "Nation first: Prioritizing national growth",
        "Ethics and Integrity: Upholding honesty and strong principles",
        "Community Development: Contributing to societal progress",
        "Altruism: Acting selflessly for the greater good",
        "Agility: Adapting quickly to change",
        "Rapid Prototyping",
        "Continuous Integration",
      ],
    },
  ];

  // Counter animation logic
  useEffect(() => {
    const counters = [
      { target: 250, key: "projectsCompleted" },
      { target: 98, key: "successRate" },
      { target: 50, key: "teamExperts" },
      { target: 15, key: "yearsExperience" },
    ];

    counters.forEach((counter) => {
      const increment = counter.target / 200;
      let currentValue = 0;
      const interval = setInterval(() => {
        if (currentValue < counter.target) {
          currentValue = Math.ceil(currentValue + increment);
          setCounterValues((prev) => ({
            ...prev,
            [counter.key]: currentValue,
          }));
        } else {
          clearInterval(interval);
        }
      }, 1);
    });
  }, []);

  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
            Our Core CoreConcept
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="bg-neutral-800 rounded-xl p-8 min-h-[32rem] flex justify-center items-center animate__animated animate__fadeInLeft">
          <div className="grid grid-cols-2 gap-10">
            <div className="tab-buttons space-y-2">
              {tabContents.map((tab) => (
                <button
                  key={tab.id}
                  className={`concept-tab w-full text-left px-6 py-4 rounded-lg ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-neutral-700 text-gray-300"
                  } font-semibold transition-all`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="tab-content w-[60%]">
              {tabContents.map((tab) => (
                <div
                  key={tab.id}
                  className={`concept-content ${
                    activeTab === tab.id ? "" : "hidden"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {tab.title}
                  </h3>
                  <p className="text-gray-300">{tab.description}</p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    {tab.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreConcept;
