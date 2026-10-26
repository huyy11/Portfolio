import { useRef } from "react";

const finePointer =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;
const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Subtle 3D tilt on hover. Falls back to a plain div on touch devices
 * and when reduced motion is preferred.
 */
export default function TiltCard({ children, className = "", ...rest }) {
  const ref = useRef(null);

  if (!finePointer || reducedMotion) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(
      2
    )}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-3px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={`tilt ${className}`.trim()}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
