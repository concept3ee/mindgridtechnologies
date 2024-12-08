// import { FieldError } from "react-hook-form";

// type InputFieldProps = {
//   label: string;
//   type?: string;
//   register: any;
//   name: string;
//   placeholder?: string;
//   error?: FieldError;
//   inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
// };

// function InputField({
//   label,
//   type = "text",
//   register,
//   name,
//   placeholder,
//   error,
//   inputProps,
// }: InputFieldProps) {
//   return (
//     <div className="flex flex-col gap-2 w-full md:w-1/4">
//       <label className="text-xs text-gray-500">{label}</label>
//       <input
//         type={type}
//         {...register(name)}
//         className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
//         {...inputProps}
//         placeholder={placeholder}
//       />
//       {error?.message && (
//         <p className="text-xs text-red-400">{error.message.toString()}</p>
//       )}
//     </div>
//   );
// }

// export default InputField;

// import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  placeholder?: string;
  error?: string | undefined; // Update to accept string | undefined
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

function InputField({
  label,
  type = "text",
  register,
  name,
  placeholder,
  error,
  inputProps,
}: InputFieldProps) {
  return (
    <div className="flex w-full">
      <div className="flex flex-col items-start gap-1.5 w-full">
        <label className="text-[14px] text-gray-500">{label}:</label>
        <input
          type={type}
          {...register(name)}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
          {...inputProps}
          placeholder={placeholder}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    </div>
  );
}

export default InputField;
