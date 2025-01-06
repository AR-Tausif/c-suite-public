import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DrwerDetails() {
  return (
    <DialogContent className="max-w-md sm:max-w-4xl">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold">Foyzan Ahmed</DialogTitle>
        <DialogDescription className="description-text">
          As there are not only positive changes and recovery but also
          widespread uncertainties, fears, and lack of confidence, we must be
          reviving the daily employment dynamism along with recovering our
          national economy and it needs to incentivize the private sector to
          recover and sustain...
        </DialogDescription>
      </DialogHeader>

      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
