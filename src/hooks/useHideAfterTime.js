import { useEffect, useState } from "react";

export default function useHideAfterTime(time) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return show;
}
