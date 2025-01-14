// TechStack.tsx
"use client";

import { useState } from 'react';

// Define the type for the TechStack component props
interface TechStackProps {
  stack: {
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Make sure this is a valid React component type
  };
}

const TechStack = ({ stack }: TechStackProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative flex items-center gap-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Tech Icon */}
      <stack.icon className="w-10 h-10 text-gray-800 dark:text-white transition-colors duration-300" />
      
      {/* Label */}
      <span
        className={`absolute left-full ml-2 text-sm font-medium text-gray-800 dark:text-white transition-opacity duration-300 ${
          hover ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {stack.label}
      </span>
    </div>
  );
};

export default TechStack;
