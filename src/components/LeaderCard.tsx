import React from "react";

const LeaderCard = () => {
  return (
    <div className="max-w-sm bg-black text-white rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full"
          src="https://th.bing.com/th/id/R.9da21b344efd0f945a4ce65ea9aaebec?rik=wa21HIx8hvWx0g&pid=ImgRaw&r=0"
          alt="Leader images"
        />
        {/* <span className="absolute top-2 right-2 bg-gray-700 text-xs text-white px-2 py-1 rounded-md uppercase font-bold">
          Animation
        </span> */}
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold mt-3">Foyzan Ahmed Apon</h2>
        <span className="text-base bg-gray-800 text-white px-2 py-1 rounded inline-block mt-2">
          CO-Founder
        </span>

       
      </div>

      {/* Footer Section */}
      <div className="bg-green-500 text-center p-3 cursor-pointer hover:bg-green-600 transition-all">
        <button className="text-black font-bold uppercase">View Details</button>
      </div>
    </div>
  );
};

export default LeaderCard;