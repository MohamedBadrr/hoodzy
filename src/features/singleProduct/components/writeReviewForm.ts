import * as Yup from "yup";

export type ReviewFormValues = {
  name: string;
  rating: string;
  review: string;
};

export const initialReviewValues: ReviewFormValues = {
  name: "",
  rating: "5",
  review: "",
};

export const reviewSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  rating: Yup.string().required("Rating is required"),
  review: Yup.string()
    .trim()
    .min(10, "Review must be at least 10 characters")
    .required("Review is required"),
});
