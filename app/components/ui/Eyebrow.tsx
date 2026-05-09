import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Eyebrow({ className = "", children }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-brand-bright before:content-[''] before:block before:w-7 before:h-px before:bg-brand-bright ${className}`}
    >
      {children}
    </div>
  );
}
