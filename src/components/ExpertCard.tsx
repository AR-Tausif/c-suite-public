const ExpertCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl animate__animated animate__fadeInUp">
      <div className="p-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mx-auto mb-6 flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
          Alex Thompson
        </h3>
        <p className="text-purple-600 text-center mb-4">Security Expert</p>
        <p className="text-gray-600 text-center mb-6">
          10+ years in cybersecurity and system protection
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExpertCard;
