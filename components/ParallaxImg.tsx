"use client";

import { useEffect, useRef, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  /** How far the image drifts against the scroll, in px at full travel. */
  drift?: number;
};

/**
 * Scroll parallax on an <img>. The parent element must be position:relative
 * (or absolute) with overflow:hidden. The image is scaled slightly so the
 * vertical drift never exposes its edges. Updates run inside rAF and only
 * while the element is in the viewport.
 */
export default function ParallaxImg({ drift = 80, style, ...imgProps }: Props) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let active = false;

    const update = () => {
      raf = 0;
      const r = box.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the section has just left below, +1 when it has left above.
      const progress = (vh / 2 - (r.top + r.height / 2)) / ((vh + r.height) / 2);
      const y = Math.max(-1, Math.min(1, progress)) * drift;
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(1.14)`;
    };

    const request = () => {
      if (active && !raf) raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      request();
    });
    io.observe(box);

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [drift]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} {...imgProps} alt={imgProps.alt ?? ""} style={{ ...style, willChange: "transform" }} />
  );
}
