import { FC } from "react";
import OverviewBox from "../components/OverviewBox";
import SectionHeading from "@/components/SectionHeading";

const Overview = () => {
  const overviewData = [
    {
      title: "Mission",
      description:
        "We deliver rapid solutions with precision and efficiency, ensuring quick time-to-market for your business needs.",
      icon: <PowerIcon/>,
    },
    {
      title: "Vission",
      description:
        "Our rigorous quality control processes ensure delivery of premium solutions that exceed expectations.",
      icon: <CheckRoundIcon/>,
    },
    {
      title: "Values",
      description:
        "Tailored solutions designed specifically for your unique business challenges and goals.",
      icon: <DotConnectIcon/>,
    },
  ];
  return (
    <section id="overview" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Company Overview" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <OverviewBox data={overviewData[0]} />
          <OverviewBox data={overviewData[1]} />
          <OverviewBox data={overviewData[2]} />
        </div>
      </div>
    </section>
  );
};

export default Overview;

const PowerIcon: FC = () => {
  return (
    <svg
      className="w-8 h-8 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
};
const CheckRoundIcon: FC = () => {
  return (
    <svg
      className="w-8 h-8 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const DotConnectIcon: FC = () => {
  return (
    <svg
      className="w-8 h-8 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  );
};
