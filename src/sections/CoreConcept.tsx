/* eslint-disable @typescript-eslint/no-unused-vars */

import SectionHeading from "@/components/SectionHeading";
import { Example } from "../components/Example";

const CoreConcept = () => {
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

  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Core CoreConcept" titleTxtColor="text-gray-100" />

        <div className="bg-neutral-800 rounded-xl p-8 min-h-[28rem] flex flex-col sm:flex-row justify-center items-center">
          <Example tabContents={tabContents} />
        </div>
      </div>
    </section>
  );
};

export default CoreConcept;
