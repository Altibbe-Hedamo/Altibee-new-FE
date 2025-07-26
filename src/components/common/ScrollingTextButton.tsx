import React from 'react';

interface ScrollingTextButtonProps {
  href?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ScrollingTextButton({
  href = '#',
  children,
  size = 'md',
  className = '',
}: ScrollingTextButtonProps) {
  const sizeStyles = {
    sm: 'px-5 py-3 text-base',
    md: 'px-8 py-5 text-xl',
    lg: 'px-10 py-6 text-2xl',
  };

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center ${sizeStyles[size]} ${className}`}
    >
      {/* visible text */}
      <span className="relative overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {children}
        </span>
      </span>

      {/* animated arrow */}
      <svg
        className="w-[0.7em] h-[0.7em] ml-[0.7em] transition-transform duration-300 ease-out group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.5 12H6.5m11 0l-5-5m5 5l-5 5"
        />
      </svg>
    </a>
  );
}