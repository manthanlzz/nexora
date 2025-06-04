import React from "react";
import { cn } from "@/lib";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={cn("w-full", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
