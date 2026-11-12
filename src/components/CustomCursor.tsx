"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], summary, label[for], input, textarea, select, [data-cursor="hover"], .cursor-pointer';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!canUseCustomCursor || prefersReducedMotion) return;

    setEnabled(true);

    return () => {
      document.documentElement.removeAttribute("data-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let hasMoved = false;
    let isVisible = false;

    const showCursor = () => {
      if (isVisible) return;
      isVisible = true;
      setVisible(true);
    };

    const hideCursor = () => {
      if (!isVisible) return;
      isVisible = false;
      setVisible(false);
    };

    const animateRing = () => {
      const deltaX = pointerX - ringX;
      const deltaY = pointerY - ringY;

      ringX += deltaX * 0.2;
      ringY += deltaY * 0.2;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        frame = window.requestAnimationFrame(animateRing);
      } else {
        ringX = pointerX;
        ringY = pointerY;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        frame = 0;
      }
    };

    const startRing = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(animateRing);
      }
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;

      pointerX = event.clientX;
      pointerY = event.clientY;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;

      if (!hasMoved) {
        hasMoved = true;
        ringX = pointerX;
        ringY = pointerY;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        document.documentElement.setAttribute("data-custom-cursor", "true");
      }

      startRing();
      showCursor();
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        setHovering(false);
        return;
      }

      setHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    };

    const handleOut = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        hideCursor();
        setHovering(false);
        setPressed(false);
      }
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    window.addEventListener("blur", handleUp);
    document.addEventListener("pointerout", handleOut);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("blur", handleUp);
      document.removeEventListener("pointerout", handleOut);
    };
  }, [enabled]);

  return (
    <div
      aria-hidden="true"
      className="custom-cursor"
      data-visible={visible}
      data-hovering={hovering}
      data-pressed={pressed}
    >
      <div ref={ringRef} className="custom-cursor-ring">
        <span className="custom-cursor-ring-inner" />
      </div>
      <div ref={dotRef} className="custom-cursor-dot">
        <span className="custom-cursor-dot-inner" />
      </div>
    </div>
  );
};

export default CustomCursor;
