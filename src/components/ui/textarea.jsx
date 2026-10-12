import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { fieldClassName } from "./input";

export const Textarea = forwardRef(function Textarea({ className, ...props }, ref) {
  return <textarea ref={ref} className={cn(fieldClassName, "min-h-28 resize-y py-3", className)} {...props} />;
});
