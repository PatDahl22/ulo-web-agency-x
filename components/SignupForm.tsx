"use client";
import React, { useReducer, useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { TextArea } from "./ui/TextArea";
import emailjs from "emailjs-com";

// Define Form Value Types
interface FormValues {
  name: string;
  email: string;
  message: string;
}

//Form Reducer Action
type FormAction =
  | { type: "UPDATE_FIELD"; field: keyof FormValues; value: string }
  | { type: "RESET_FORM" };

//Form Reducer Function
const formReducer = (state: FormValues, action: FormAction): FormValues => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return { name: "", email: "", message: "" };
    default:
      return state;
  }
};

export function SignupForm() {
  const formRef = useRef<HTMLFormElement>(null);

  //Reducer initial values
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  const [form, dispatch] = useReducer(formReducer, initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await emailjs.send(
        "service_wbmovm2",
        "template_w4acalb",
        {
          from_name: form.name,
          to_name: "Pattaravarat Dahl",
          from_email: form.email,
          to_email: "saravan.dahl79@gmail.com",
          message: form.message,
        },
        "FO9OEVXccvSi0lJ8v"
      );

      if (response.status === 200) {
        alert("Thank you. I will get back to you as soon as possible.");
        dispatch({ type: "RESET_FORM" }); // Clear the form
      } else {
        throw new Error(
          `Email failed to send: ${response.status} - ${response.text}`
        );
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      setError("Ahh, something went wrong. Please try again."); // Set error message
      alert(error); //Error alert
    } finally {
      setLoading(false); // Always set loading to false, even if there's an error
    }
  };

  return (
    <div className="mx-auto w-full rounded-none md:rounded-2xl p-8 mb-20 shadow-input bg-white dark:bg-black-100 items-center justify-center max-w-[800px]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Let's cooperate!
      </h2>
      <form className="my-8" onSubmit={handleSubmit} ref={formRef}>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            placeholder="Tyler"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
            placeholder="xxxxx.xxxx@xxx.com"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="message">Your Message</Label>
          <TextArea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "message",
                value: e.target.value,
              })
            }
            placeholder="Enter your message..."
            required
          />
        </LabelInputContainer>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full items-center" />

        <div className="flex flex-col items-center">
          <MagicButton
            title={loading ? "Sending..." : "Fire Away!"}
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="w-full" // Make button full width
            disabled={loading} //Disable the button when it's loading
          />
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
