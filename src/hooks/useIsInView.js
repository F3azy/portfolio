import { useState, useMemo, useEffect  } from "react";

export default function useIsInViewport(ref, threshold) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
          { threshold: threshold }
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
  