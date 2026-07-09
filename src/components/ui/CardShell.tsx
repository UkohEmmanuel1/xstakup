"use client";

import type { ReactNode } from "react";

interface CardShellProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  hover?: boolean;
  asButton?: boolean;
  onClick?: () => void;
}

export function CardShell({
  children,
  className = "",
  accent = false,
  hover = false,
  asButton = false,
  onClick,
}: CardShellProps) {
  const base = `rounded-xl border border-card-border bg-card-bg p-8 md:p-10 h-full min-h-[200px] md:min-h-[260px] flex flex-col relative transition-all ${className}`;
  const hoverClasses = hover ? "hover:-translate-y-0.5 hover:border-card-hover" : "";
  const buttonClasses = asButton ? "cursor-pointer text-left w-full" : "";

  const content = (
    <>
      {accent && (
        <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full bg-card-accent" />
      )}
      {children}
    </>
  );

  if (asButton) {
    return (
      <button onClick={onClick} className={`${base} ${hoverClasses} ${buttonClasses}`}>
        {content}
      </button>
    );
  }

  return <div className={`${base} ${hoverClasses} ${buttonClasses}`}>{content}</div>;
}
