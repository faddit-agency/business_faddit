"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView<T extends HTMLElement = HTMLElement>(options?: UseInViewOptions) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);
  const { triggerOnce = true, ...observerOptions } = options || {};

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // triggerOnce가 true이면 한 번만 트리거되도록 옵저버 해제
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
        ...observerOptions,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggerOnce, options?.threshold, options?.rootMargin]);

  return { ref, isInView };
}

