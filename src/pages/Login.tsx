import { useFormik } from "formik";
import { Link } from "react-router";
import * as Yup from "yup";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import BreadcrumbTrail from "../components/shared/BreadcrumbTrail";

type LoginFormValues = {
  email: string;
  password: string;
};

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const Login = () => {
  const formik = useFormik<LoginFormValues>({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, helpers) => {
      helpers.setStatus(`Welcome back, ${values.email}.`);
      helpers.setSubmitting(false);
    },
  });

  const emailError = formik.touched.email && formik.errors.email;
  const passwordError = formik.touched.password && formik.errors.password;

  return (
    <div>
      <main className="mx-auto max-w-310 px-4 py-8 sm:px-8 lg:px-0">
        <BreadcrumbTrail
          className="mb-8"
          items={[{ label: "Home", to: "/" }, { label: "Login" }]}
        />

        <section className="mx-auto flex max-w-md flex-col gap-7">
          <div className="text-center">
            <h1 className="font-inter text-4xl font-bold text-black">LOGIN</h1>
            <p className="mt-3 text-sm text-gray-500">
              Sign in to continue shopping your favorite styles.
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-5 rounded-lg border border-black/10 p-6"
            noValidate
          >
            <div className="flex flex-col gap-2">
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
                aria-invalid={Boolean(emailError)}
                className="h-12 rounded-lg ps-4"
              />
              {emailError && (
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
                autoComplete="current-password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                aria-invalid={Boolean(passwordError)}
                className="h-12 rounded-lg ps-4"
              />
              {passwordError && (
                <p className="text-sm text-destructive">
                  {formik.errors.password}
                </p>
              )}
            </div>

            {formik.status && (
              <p className="rounded-lg bg-[#f0f0f0] px-4 py-3 text-sm text-black">
                {formik.status}
              </p>
            )}

            <Button type="submit" className="mt-2 w-full">
              Login
            </Button>

            <p className="text-center text-sm text-gray-500">
              New to SHOP.CO?{" "}
              <Link className="font-medium text-black underline" to="/register">
                Create an account
              </Link>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
