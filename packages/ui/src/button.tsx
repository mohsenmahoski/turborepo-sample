"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 p-3 rounded-md"
    >
      {children}
    </button>
  );
};
