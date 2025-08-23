import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

interface CardIconProps {
  Icon: ComponentType<IconBaseProps>;
  size?: number;
  className?: string;
}

export function CardIcon({ Icon, size = 16, className = "" }: CardIconProps) {
  const baseClasses = "flex items-center justify-center w-8 h-8 shrink-0";
  const variantClasses =
    "rounded-md border border-primary/5 bg-primary/10 dark:bg-primary/20";

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      <Icon size={size} className="text-primary" />
    </div>
  );
}
