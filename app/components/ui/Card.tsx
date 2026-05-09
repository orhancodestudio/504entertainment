import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export function Card({ className = "", children }: Props) {
  return (
    <div
      className={`bg-surface border border-border rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-brand-bright/55 hover:shadow-[0_30px_60px_-25px_rgba(104,43,175,0.55)] ${className}`}
    >
      {children}
    </div>
  );
}
