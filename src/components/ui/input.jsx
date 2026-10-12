import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const fieldClassName =
  "block w-full rounded-none border-0 border-b border-ink/25 bg-transparent px-0 text-base text-ink transition-colors placeholder:text-muted/70 hover:border-ink/50 focus:border-signal focus:outline-none focus-visible:ring-0 aria-[invalid=true]:border-signal";

// forwardRef is required so react-hook-form can register and focus the field.
export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn(fieldClassName, "h-12", className)} {...props} />;
});
