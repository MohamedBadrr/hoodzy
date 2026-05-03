import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import InputField from "../components/fields/InputField";
import { Button } from "../components/ui/button";
import { registerSchema } from "../features/auth/schemas";
import type { RegisterFormValues } from "../features/auth/types";
import { useAuthStore } from "../store/authStore";

const initialValues: RegisterFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const registerAccount = useAuthStore((state) => state.registerAccount);

  return (
    <div>
      <main className="mx-auto max-w-310 px-4 py-8 sm:px-8 lg:px-0 ">
        <section className="mx-auto flex max-w-2xl flex-col gap-7">
          <div className="text-center">
            <h1 className="font-inter text-4xl font-bold text-black">
              REGISTER
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Create your account and keep your wardrobe picks in one place.
            </p>
          </div>

          <Formik<RegisterFormValues>
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values, helpers) => {
              const result = registerAccount(values);

              if (!result.success) {
                const error = result.error ?? "Unable to create this account.";
                helpers.setFieldError("email", error);
                toast.error(error);
                helpers.setSubmitting(false);
                return;
              }

              toast.success("Account created successfully");
              helpers.setSubmitting(false);
              navigate("/");
            }}
          >
            {({ isSubmitting }) => (
              <Form
                className="grid gap-5 rounded-lg border border-black/10 p-6 sm:grid-cols-2"
                noValidate
              >
                <InputField
                  name="firstName"
                  label="First Name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                />

                <InputField
                  name="lastName"
                  label="Last Name"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name"
                />

                <InputField
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="sm:col-span-2"
                />

                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                />

                <InputField
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                />

                <div className="flex flex-col gap-4 sm:col-span-2">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    Register
                  </Button>
                  <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                      className="font-medium text-black underline"
                      to="/login"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </div>
  );
};

export default Register;
