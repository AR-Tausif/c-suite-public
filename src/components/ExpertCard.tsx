const ExpertCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl">
      <div className="p-6">
        <div className="relative">
          <img
            className="w-full rounded mb-4"
            src="https://img.freepik.com/free-photo/beautiful-young-man-student-businessman-jacket-holds-his-arms-crossed-isolated-light-grey-wall_231208-6135.jpg?t=st=1736880770~exp=1736884370~hmac=ee0e9af8d8ff3e0c5944e50f59ae9f3a358ea4a8b848ad5ad909c1ebf4443b0a&w=1060"
            alt="Leader images"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
          Alex Thompson
        </h3>
        <p className="text-cerulean-blue-800 text-center mb-4">Security Expert</p>
        <p className="text-gray-600 text-center">
          10+ years in cybersecurity and system protection
        </p>
        {/* <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
            View Profile
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default ExpertCard;
