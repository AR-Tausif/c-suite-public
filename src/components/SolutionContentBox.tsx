interface IItem {
  title: string;
  content: string;
  bg: string;
}
interface SolutionContentBoxProps {
  item: IItem;
}

const SolutionContentBox: React.FC<SolutionContentBoxProps> = ({ item }) => {
  const { title, content, bg = "from-blue-600 to-purple-600" } = item;
  return (
    <div className="group animate__animated animate__fadeInUp">
      <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
        <div className={`bg-gradient-to-br ${bg} p-8 h-full`}>
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
          <div className="relative z-10">
            <svg
              className="w-12 h-12 text-white mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-white/90 mb-6">{content}</p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
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
                Market Analysis
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
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
                Digital Roadmap
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
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
                Implementation Plan
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionContentBox;
