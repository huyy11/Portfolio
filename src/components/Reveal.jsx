import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-triggered reveal: fades and lifts content into view once.
 * Becomes a plain passthrough when reduced motion is preferred.
 */
export default function Reveal({ children, delay = 0, className }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
