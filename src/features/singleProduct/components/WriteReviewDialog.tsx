import { PenLine } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

export default function WriteReviewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-12 px-6 py-0 text-sm">
          <PenLine className="size-4" />
          Write a Review
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
          <DialogDescription>
            Share your experience with this product.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-black">
            Name
            <input
              className="h-11 rounded-lg border border-black/10 px-3 text-sm font-normal outline-none focus:ring-3 focus:ring-ring/30"
              placeholder="Your name"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-black">
            Rating
            <select className="h-11 rounded-lg border border-black/10 px-3 text-sm font-normal outline-none focus:ring-3 focus:ring-ring/30">
              <option>5 stars</option>
              <option>4 stars</option>
              <option>3 stars</option>
              <option>2 stars</option>
              <option>1 star</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium text-black">
            Review
            <textarea
              className="min-h-32 rounded-lg border border-black/10 px-3 py-3 text-sm font-normal outline-none focus:ring-3 focus:ring-ring/30"
              placeholder="What did you like about it?"
            />
          </label>

          <DialogFooter>
            <Button type="submit" className="h-11 px-8 py-0">
              Submit Review
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
