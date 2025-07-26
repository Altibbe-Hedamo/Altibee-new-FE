// src/components/ui/Button.tsx
import React from 'react';

interface Props {
  href?: string;
  children: React.ReactNode;
  fill?: boolean;
}

const Button: React.FC<Props> = ({ href, children, fill = false }) => {
  const base =
    'inline-flex items-center space-x-2 font-sans text-sm px-6 py-3 rounded-sm border border-[#9FF3FF] transition-all duration-300';
  const filled = fill
    ? 'bg-[#9FF3FF] text-[#131619] hover:bg-transparent hover:text-[#9FF3FF]'
    : 'text-[#9FF3FF] hover:bg-[#9FF3FF] hover:text-[#131619]';

  return href ? (
    <a href={href} className={`${base} ${filled}`}>
      {children}
    </a>
  ) : (
    <button className={`${base} ${filled}`}>{children}</button>
  );
};

export default Button;