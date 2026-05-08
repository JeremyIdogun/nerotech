import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[#18232F]/10 bg-white p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
