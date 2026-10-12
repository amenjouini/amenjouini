import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [open, onOpenChange]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgb(20_19_16/0.72)] p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onOpenChange(false);
          }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function DialogContent({ className, children, onClose, label }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <motion.div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      className={cn(
        "relative max-h-full w-full max-w-sm overflow-y-auto rounded-2xl border bg-raised p-6 text-ink shadow-lift focus-visible:ring-0 sm:p-8",
        className,
      )}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition hover:bg-ink/[0.07] hover:text-ink"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </button>
      {children}
    </motion.div>
  );
}
