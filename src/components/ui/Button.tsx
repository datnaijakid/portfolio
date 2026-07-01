import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-violet";

  const styles = {
    primary:
      "bg-accent-gradient text-white shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5",
    secondary:
      "border border-border text-ink hover:border-ink-faint hover:bg-bg-elevated hover:-translate-y-0.5",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(base, styles[variant])} {...props}>
      {icon}
      {children}
    </Link>
  );
}
