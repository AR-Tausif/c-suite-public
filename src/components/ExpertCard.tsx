import ExpertAlertBox from "./ExpertAlertBox";
import { AlertDialog, AlertDialogTrigger } from "./ui/alert-dialog";

const ExpertCard = () => {
  return (
    <div className="bg-gray-100 rounded-xl max-w-sm shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-sm hover:scale-105">
      <div className="p-6">
        <div className="relative">
          <img
            className="w-full rounded mb-4"
            src="https://img.freepik.com/free-photo/beautiful-young-man-student-businessman-jacket-holds-his-arms-crossed-isolated-light-grey-wall_231208-6135.jpg?t=st=1736880770~exp=1736884370~hmac=ee0e9af8d8ff3e0c5944e50f59ae9f3a358ea4a8b848ad5ad909c1ebf4443b0a&w=1060"
            alt="Leader images"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-">
          Alex Thompson
        </h3>
        <p className="text-cerulean-blue-900 font-semibold text-center">
          Security Expert
        </p>
        <p className="text-gray-600 text-center hidden sm:block">
          10+ years in cybersecurity
        </p>
        <div className="flex justify-center space-x-4">
        <AlertDialog>
          <AlertDialogTrigger className="">
            <div className="flex items-center justify-center">
              <p className="text-cerulean-blue-800 text-center font-bold inline">
                Learn More
              </p>
              <svg
                className="w-5 h-5 ml-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </AlertDialogTrigger>
            <ExpertAlertBox />
        </AlertDialog>
        </div>
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
