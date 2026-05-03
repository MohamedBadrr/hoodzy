import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import InputField from "../components/fields/InputField";
import { Button } from "../components/ui/button";
import { loginSchema } from "../features/auth/schemas";
import type { LoginFormValues } from "../features/auth/types";
import { useAuthStore } from "../store/authStore";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const loginWithCredentials = useAuthStore(
    (state) => state.loginWithCredentials,
  );

  return (
    <div className=" ">
      <main className="mx-auto max-w-310 px-4 py-8 sm:px-8 lg:px-0 ">
        <section className="mx-auto flex max-w-md flex-col gap-7">
          <div className="text-center">
            <h1 className="font-inter text-4xl font-bold text-black">LOGIN</h1>
            <p className="mt-3 text-sm text-gray-500">
              Sign in to continue shopping your favorite styles.
            </p>
          </div>

          <Formik<LoginFormValues>
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values, helpers) => {
              const result = loginWithCredentials(values);

              if (!result.success) {
                const error = result.error ?? "Unable to log in.";
                helpers.setFieldError("email", error);
                toast.error(error);
                helpers.setSubmitting(false);
                return;
              }

              toast.success("Logged in successfully");
              helpers.setSubmitting(false);
              navigate("/");
            }}
          >
            {({ isSubmitting }) => (
              <Form
                className="flex flex-col gap-5 rounded-lg border border-black/10 p-6"
                noValidate
              >
                <InputField
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />

                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                />

                <Button
                  type="submit"
                  className="mt-2 w-full"
                  disabled={isSubmitting}
                >
                  Login
                </Button>

                <p className="text-center text-sm text-gray-500">
                  New to SHOP.CO?{" "}
                  <Link
                    className="font-medium text-black underline"
                    to="/register"
                  >
                    Create an account
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </div>
  );
};

export default Login;
