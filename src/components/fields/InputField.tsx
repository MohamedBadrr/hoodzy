import { useState } from "react";
import { useField } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

type InputFieldProps = {
  name: string;
  placeholder: string;
  type?: string;
  label: string;
  labelClassName?: string;
};

const InputField = ({
  name,
  placeholder,
  label,
  labelClassName,
  type = "text",
}: InputFieldProps) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-1">
      <div className="relative">
        {label && (
          <label
            className={cn("text-sm font-medium text-black", labelClassName)}
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
          className={isPassword ? "pr-10" : ""}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default InputField;
