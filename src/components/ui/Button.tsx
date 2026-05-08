import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#12A3A2] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
    variant === "primary" &&
      "bg-[#12A3A2] text-white hover:bg-[#0D6E70]",
    variant === "secondary" &&
      "border border-[#18232F]/15 bg-white text-[#18232F] hover:border-[#12A3A2] hover:text-[#0D6E70]",
    variant === "ghost" &&
      "text-[#18232F] hover:text-[#0D6E70]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
