import { useState, useMemo, useEffect  } from "react";

export function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
          { threshold: 0.5 }
          ),
      [],
    );
    
    useEffect(() => {
      observer.observe(ref.current);

        return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
}
  