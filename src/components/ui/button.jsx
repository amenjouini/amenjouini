import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition duration-300 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ink text-paper hover:bg-signal hover:text-white",
        accent: "bg-signal text-white hover:bg-ink hover:text-paper",
        outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
        ghost: "text-ink/70 hover:bg-ink/[0.06] hover:text-ink",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-4 text-[0.8125rem]",
        lg: "h-14 px-7 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
