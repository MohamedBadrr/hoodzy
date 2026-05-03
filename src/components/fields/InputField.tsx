import { useState } from "react";
import { useField } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

type InputFieldProps = Omit<React.ComponentProps<"input">, "name"> & {
  name: string;
  placeholder: string;
  type?: string;
  label: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
};

const InputField = ({
  name,
  placeholder,
  label,
  className,
  inputClassName,
  labelClassName,
  type = "text",
  ...props
}: InputFieldProps) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={cn("space-y-2", className)}>
      <div className="relative">
        {label && (
          <label
            className={cn(
              "mb-2 block text-sm font-medium text-black",
              labelClassName,
            )}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <Input
          {...field}
          id={name}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          aria-invalid={Boolean(meta.touched && meta.error)}
          className={cn(
            "h-12 rounded-lg ps-4",
            isPassword && "pr-10",
            inputClassName,
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-10 text-gray-500 transition-colors hover:text-black"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {meta.touched && meta.error && (
        <p className="text-sm text-destructive">{meta.error}</p>
      )}
    </div>
  );
};

export default InputField;
