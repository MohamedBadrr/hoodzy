import { Field, Form, Formik } from "formik";
import { PenLine } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import InputField from "../../../components/fields/InputField";
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
import {
  initialReviewValues,
  reviewSchema,
  type ReviewFormValues,
} from "./writeReviewForm";

export default function WriteReviewDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

        <Formik<ReviewFormValues>
          initialValues={initialReviewValues}
          validationSchema={reviewSchema}
          onSubmit={(_, helpers) => {
            toast.success("Review submitted");
            helpers.resetForm();
            helpers.setSubmitting(false);
            setOpen(false);
          }}
        >
          {({ errors, isSubmitting, touched }) => (
            <Form className="grid gap-4">
              <InputField
                name="name"
                label="Name"
                placeholder="Your name"
                inputClassName="h-11 rounded-lg ps-3"
              />

              <label className="grid gap-2 text-sm font-medium text-black">
                Rating
                <Field
                  as="select"
                  name="rating"
                  className="h-11 rounded-lg border border-black/10 px-3 text-sm font-normal outline-none focus:ring-3 focus:ring-ring/30"
                >
                  <option value="5">5 stars</option>
                  <option value="4">4 stars</option>
                  <option value="3">3 stars</option>
                  <option value="2">2 stars</option>
                  <option value="1">1 star</option>
                </Field>
              </label>

              <label className="grid gap-2 text-sm font-medium text-black">
                Review
                <Field
                  as="textarea"
                  name="review"
                  className="min-h-32 rounded-lg border border-black/10 px-3 py-3 text-sm font-normal outline-none focus:ring-3 focus:ring-ring/30"
                  placeholder="What did you like about it?"
                />
                {touched.review && errors.review && (
                  <p className="text-sm text-destructive">{errors.review}</p>
                )}
              </label>

              <DialogFooter>
                <Button
                  type="submit"
                  className="h-11 px-8 py-0"
                  disabled={isSubmitting}
                >
                  Submit Review
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
