import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const isFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Futuristic two-part cursor: glowing dot + delayed ring outline.
 * Expands on links/buttons; shows a contextual label on project cards.
 * Only rendered on fine-pointer (desktop) devices without reduced motion,
 * and never intercepts clicks (pointer-events: none).
 */
export default function CustomCursor() {
  const { t } = useLanguage();
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const enabled = isFinePointer() && !prefersReducedMotion();

  useEffect(() => {
    if (!enabled) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    document.documentElement.classList.add("custom-cursor-active");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const render = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      const target = e.target instanceof Element ? e.target : null;
      const interactive = target?.closest(
        'a, button, input, textarea, [role="button"]'
      );
      const view = target?.closest('[data-cursor="view"]');
      ring.classList.toggle("is-view", Boolean(view));
      ring.classList.toggle("is-link", Boolean(interactive) && !view);
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cursor-ring__label">{t.projects.viewLabel}</span>
      </div>
    </>
  );
}
