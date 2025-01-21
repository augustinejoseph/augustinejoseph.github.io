// import { cn } from "@/lib/utils";
// import React from "react";

// export interface Props {
//   className?: string;
//   icon: React.ElementType;
//   label: string;
//   children?: React.ReactNode;
// }

// export function TechStack({ className, icon: Icon, label, children }: Props) {
//   return (
//     <div className={cn(className, "group relative flex items-center")}>
//       <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
//         <Icon className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-200" />
//       </div>

//       <span className="absolute opacity-0 group-hover:opacity-100">
//         {label}
//       </span>
//       {children && <span className="ml-4">{children}</span>}
//     </div>
//   );
// }


import { cn } from "@/lib/utils";
import React from "react";

export interface Props {
  className?: string;
  icon: React.ElementType;
  label: string;
  children?: React.ReactNode;
}

export function TechStack({ className, icon: Icon, label, children }: Props) {
  return (
    <div className={cn(className, "group relative flex items-center")}>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
        <Icon className="h-6 w-6 fill-zinc-500 transition hover:fill-zinc-200" />
      </div>

      {/* Hovered label with background */}
      <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-zinc-800 text-white text-xs rounded py-1 px-2 z-10">
        {label}
      </span>

      {children && <span className="ml-4">{children}</span>}
    </div>
  );
}
