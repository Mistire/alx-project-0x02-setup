"use client";

import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-red-600 text-white hover:bg-red-700 transition-colors ${sizeClasses[size]} ${shape}`}
    >
      {label}
    </button>
  );
};

export default Button;
