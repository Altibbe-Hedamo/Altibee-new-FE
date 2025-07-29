// src/hooks/useScrollHide.ts
import { useState, useEffect } from 'react';

export function useScrollHide(threshold = 60) {
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      // going down → hide, going up → show
      setShow(y < lastY || y <= threshold);
      setLastY(y);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [lastY, threshold]);

  return show;
}