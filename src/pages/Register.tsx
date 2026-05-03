import { useFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import BreadcrumbTrail from "../components/shared/BreadcrumbTrail";

type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const registerSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must include an uppercase letter")
    .matches(/[a-z]/, "Password must include a lowercase letter")
    .matches(/[0-9]/, "Password must include a number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const initialValues: RegisterFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const formik = useFormik<RegisterFormValues>({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, helpers) => {
      helpers.setStatus(
        `Account ready for ${values.firstName} ${values.lastName}.`,
      );
      helpers.setSubmitting(false);
    },
  });

  const getError = (field: keyof RegisterFormValues) =>
    formik.touched[field] && formik.errors[field];

  return (
    <div>
      <main className="mx-auto max-w-310 px-4 py-8 sm:px-8 lg:px-0">
        <BreadcrumbTrail
          className="mb-8"
          items={[{ label: "Home", to: "/" }, { label: "Register" }]}
        />

        <section className="mx-auto flex max-w-2xl flex-col gap-7">
          <div className="text-center">
            <h1 className="font-inter text-4xl font-bold text-black">
              REGISTER
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Create your account and keep your wardrobe picks in one place.
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="grid gap-5 rounded-lg border border-black/10 p-6 sm:grid-cols-2"
            noValidate
          >
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-black"
                htmlFor="firstName"
              >
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(getError("firstName"))}
                className="h-12 rounded-lg ps-4"
              />
              {getError("firstName") && (
                <p className="text-sm text-destructive">
                  {formik.errors.firstName}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-black"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(getError("lastName"))}
                className="h-12 rounded-lg ps-4"
              />
              {getError("lastName") && (
                <p className="text-sm text-destructive">
                  {formik.errors.lastName}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="text-sm font-medium text-black" htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(getError("email"))}
                className="h-12 rounded-lg ps-4"
              />
              {getError("email") && (
                <p className="text-sm text-destructive">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-black"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(getError("password"))}
                className="h-12 rounded-lg ps-4"
              />
              {getError("password") && (
                <p className="text-sm text-destructive">
                  {formik.errors.password}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-medium text-black"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(getError("confirmPassword"))}
                className="h-12 rounded-lg ps-4"
              />
              {getError("confirmPassword") && (
                <p className="text-sm text-destructive">
                  {formik.errors.confirmPassword}
                </p>
              )}
            </div>

            {formik.status && (
              <p className="rounded-lg bg-[#f0f0f0] px-4 py-3 text-sm text-black sm:col-span-2">
                {formik.status}
              </p>
            )}

            <div className="flex flex-col gap-4 sm:col-span-2">
              <Button type="submit" className="w-full">
                Register
              </Button>
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link className="font-medium text-black underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Register;
