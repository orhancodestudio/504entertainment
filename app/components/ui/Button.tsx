import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "sm" | "md";

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  href?: string;
} & Omit<ComponentProps<"button">, "className" | "children">;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-[0.02em] transition disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-gradient-to-br from-brand to-brand-bright shadow-[0_10px_30px_-12px_rgba(138,72,214,0.7)] hover:-translate-y-px hover:brightness-110 hover:shadow-[0_18px_40px_-15px_rgba(138,72,214,0.9)]",
  ghost:
    "text-foreground border border-border hover:border-brand-bright/70 hover:bg-brand-bright/10",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...rest
}: Props) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button type={rest.type ?? "button"} className={cls} {...rest}>
      {children}
    </button>
  );
}
