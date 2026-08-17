"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

/**
 * Tracks if an element is intersecting the viewport.
 */
export function useIntersection(options: UseIntersectionOptions = {}) {
  const { triggerOnce = true, ...observerOptions } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && triggerOnce) {
        observer.unobserve(element);
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element && !triggerOnce) {
        observer.unobserve(element);
      }
    };
  }, [triggerOnce, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold]);

  return [ref, isIntersecting] as const;
}
export default useIntersection;
