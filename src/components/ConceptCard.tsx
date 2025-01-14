import { ComponentType } from "@/interface";
import { FC } from "react";

interface IProps extends ComponentType {
  item: {
    title: string;
    description: string;
    points: string[];
  },
  isHidden: boolean,
}
const ConceptCard: FC<IProps> = ({ item, isHidden }) => {
  const { title, description, points } = item;
  return (
    <div className={`concept-content ${isHidden ? "hidden" : "block"}`} data-tab="1">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}:</p>
      <ul className="mt-4 space-y-2 text-gray-300">
        {points.map((list, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {list}
          </li>
        ))}
        <li className="flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Rapid Prototyping
        </li>
        <li className="flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-purple-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Continuous Integration
        </li>
      </ul>
    </div>
  );
};
export default ConceptCard;
