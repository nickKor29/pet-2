"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface BackButtonProps {
  variant?: "default" | "secondary";
  children: ReactNode;
  className?: string;
}

function BackButton({
  variant = "default",
  children,
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  const baseStyles =
    "text-lg transition-colors duration-250 ease-in-out focus:outline-none";

  const variantStyles = {
    default: "text-accent-600 hover:text-accent-500",

    secondary:
      "bg-accent-600 text-accent-50 hover:bg-accent-500 px-4 py-3 rounded-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={() => router.back()}
    >
      {children}
    </button>
  );
}

export default BackButton;
