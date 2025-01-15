
const LeaderCard = () => {
  return (
    <div className="max-w-sm bg-black text-white rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="relative max-h-60 overflow-hidden">
        <img
          className="w-full"
          src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?t=st=1736880580~exp=1736884180~hmac=4cd294f096041ee004bfa907c0b255eeacfeadd9b81af0aef2b541aa7c966bd6&w=1060"
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