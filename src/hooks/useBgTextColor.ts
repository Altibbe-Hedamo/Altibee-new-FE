// hooks/useBgTextColor.ts
import { useEffect, useState } from 'react';

/**
 * Returns "cyan" or "black" depending on the *real* body background.
 * Works with hex, rgb(), rgba(), named colors.
 */
export function useBgTextColor() {
  const [color, setColor] = useState<'cyan' | 'black'>('black');

  useEffect(() => {
    // run once after paint
    const rgb = window.getComputedStyle(document.body).backgroundColor;
    const [r, g, b] = rgb.match(/\d+/g)!.map(Number);

    // very naive luminance check
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    setColor(luminance < 128 ? 'cyan' : 'black');
  }, []);

  return color;
}