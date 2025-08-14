"use client";

import { useEffect, useRef, useState } from "react";

const MS_IN_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

/**
 * Continuously computes the age (in years) since the provided birth date.
 * Uses requestAnimationFrame for smooth updates without allocating intervals.
 * Returns a number you can format with toFixed(decimals).
 */
export function useAge(birthDate: Date) {
  const birthMs = birthDate.getTime();
  const [age, setAge] = useState<number>(
    () => (Date.now() - birthMs) / MS_IN_YEAR
  );
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      setAge((Date.now() - birthMs) / MS_IN_YEAR);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [birthMs]);

  return age;
}

interface DynamicAgeProps {
  birthDate: Date;
  decimals?: number;
  className?: string;
}

/**
 * Displays a live‑updating age with the desired number of decimal places.
 * Wrapped in its own component so only this span re-renders at 60fps.
 */
export function DynamicAge({
  birthDate,
  decimals = 8,
  className,
}: DynamicAgeProps) {
  const age = useAge(birthDate);
  return (
    <span
      suppressHydrationWarning
      className={className ? className : "font-mono"}
      aria-label="current-age"
      title={`Age in years (≈${decimals} decimal places)`}
    >
      {age.toFixed(decimals)}
    </span>
  );
}
