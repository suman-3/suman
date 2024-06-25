import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc?: string;
  className?: string;
}

export const Logo = ({ imgSrc, className }: LogoProps) => {
  return (
    <div className="flex items-center justify-start gap-1 select-none">
      <Image
        src={imgSrc || `/logo.svg`}
        alt="logo"
        width={35}
        height={35}
        className={cn("select-none pointer-events-none", className)}
      />
      <h1 className="text-4xl font-bold text-primary">Creta</h1>
    </div>
  );
};
