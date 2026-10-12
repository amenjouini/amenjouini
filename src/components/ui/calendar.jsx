import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { cn } from "@/lib/utils";

export function Calendar({ className, ...props }) {
  return (
    <DayPicker
      className={cn("rounded-xl border bg-raised p-3 font-sans text-sm text-ink shadow-lift", className)}
      {...props}
    />
  );
}
