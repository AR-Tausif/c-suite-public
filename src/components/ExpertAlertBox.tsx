import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ExpertAlertBox = () => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Expert Name of ...</AlertDialogTitle>
        <AlertDialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facilis aperiam quae rem repudiandae incidunt asperiores consectetur voluptates doloribus accusantium rerum facere, ab dignissimos cumque repellat. Quasi dolore commodi accusantium?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default ExpertAlertBox;
