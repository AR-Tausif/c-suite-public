import ExpertAlertBox from "./ExpertAlertBox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";

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
              <button className="px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                Learn More
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Expert Name of ...</AlertDialogTitle>
                <AlertDialogDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae facilis aperiam quae rem repudiandae incidunt
                  asperiores consectetur voluptates doloribus accusantium rerum
                  facere, ab dignissimos cumque repellat. Quasi dolore commodi
                  accusantium?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};
export default ExpertCard;
