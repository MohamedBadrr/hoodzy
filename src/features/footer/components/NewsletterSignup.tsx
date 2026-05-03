import { Form, Formik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";
import InputField from "../../../components/fields/InputField";
import { Button } from "../../../components/ui/button";

type NewsletterFormValues = {
  email: string;
};

const initialValues: NewsletterFormValues = {
  email: "",
};

const newsletterSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
});

export default function NewsletterSignup() {
  return (
    <section className="-mt-28 rounded-[20px] bg-black px-5 py-7 text-white shadow-sm sm:-mt-24 sm:px-8 sm:py-8 md:-mt-20 md:px-10 lg:-mt-18 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-16 lg:py-9">
      <h2 className="font-inter max-w-170 text-[28px] font-bold leading-[1.12] text-balance sm:text-3xl lg:max-w-150 lg:text-4xl xl:max-w-160">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>

      <Formik<NewsletterFormValues>
        initialValues={initialValues}
        validationSchema={newsletterSchema}
        onSubmit={(_, helpers) => {
          toast.success("Subscribed to newsletter");
          helpers.resetForm();
          helpers.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:max-w-[520px] md:max-w-[560px] lg:mt-0 lg:max-w-none lg:basis-90 xl:basis-100">
            <InputField
              name="email"
              label="Email address"
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              labelClassName="sr-only"
              inputClassName="h-11 rounded-full border-0 bg-white pl-4 pr-4 text-sm text-black placeholder:text-black/40 focus-visible:ring-3 focus-visible:ring-white/30 sm:h-12"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 rounded-full bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90! sm:h-12"
            >
              Subscribe to Newsletter
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
