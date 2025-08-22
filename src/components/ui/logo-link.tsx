import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import { cn } from "@/lib/utils";

interface LogoLinkProps {
  href: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  className?: string;
  logoSize?: number;
  iconSize?: number;
  external?: boolean;
}

export function LogoLink({
  href,
  logoSrc,
  logoAlt,
  title,
  className,
  logoSize = 44,
  iconSize = 20,
  external = true,
}: LogoLinkProps) {
  const linkProps = external
    ? {
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Link
      href={href}
      {...linkProps}
      className={cn(
        "relative z-10 flex-shrink-0 bg-white border w-fit p-2 rounded-sm shadow-xs group transition-all duration-200 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer overflow-hidden",
        className
      )}
      title={title}
      aria-label={external ? `Open ${title} (external link)` : `Go to ${title}`}
    >
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={logoSize}
        height={logoSize}
        className="rounded-xs transition-all duration-300 group-hover:blur-sm"
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-xs rounded-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <HiExternalLink
          size={iconSize}
          className="text-foreground"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
