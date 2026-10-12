import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export function MotionReveal({ as: Component = motion.div, delay = 0, y = 28, children, ...props }) {
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};
