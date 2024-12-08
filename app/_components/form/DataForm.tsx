"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import InputField from "../inputField/InputField";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must have at least 3 characters." })
    .max(25, { message: "Name cannot exceed 25 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  website: z.string().url({ message: "Please enter a valid website URL." }),
  phone: z.string().min(1, { message: "Phone number is required." }),
});

type Inputs = z.infer<typeof schema>;

function DataForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: Inputs) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const content = await response.json();
      if (response.status === 409 || !response.ok) {
        setIsLoading(false);
        toast.error(content.message || "An error occurred. Please try again.");
        return;
      }

      reset();
      setIsLoading(false);
      toast.success("Successfully submitted!");
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between flex-wrap gap-3 max-w-[548px] mx-auto">
        <InputField
          label="Name"
          name="name"
          register={register}
          placeholder="Enter your company name"
          error={errors.name?.message}
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          placeholder="Enter your company email"
          error={errors.email?.message}
        />
        <InputField
          label="Website"
          name="website"
          register={register}
          placeholder="Enter your company website"
          error={errors.website?.message}
        />
        <InputField
          label="Phone"
          name="phone"
          register={register}
          placeholder="Enter your company phone number"
          error={errors.phone?.message}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary -mt-5"
        disabled={isLoading}
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default DataForm;
