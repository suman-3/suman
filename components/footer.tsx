import { cn } from "@/lib/utils";
import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import Instagram from "./icons/instagram";
import Link from "next/link";
import Github from "./icons/github";
import LinkedIn from "./icons/linkedin";
import Whatsapp from "./icons/whatsapp";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={cn(
        "w-full h-[17vh] md:h-[12vh] bg-gray-900/5 backdrop-blur-sm  flex flex-col-reverse md:flex-row items-center justify-between pt-8 md:py-0 border-t px-10",
        className
      )}
    >
      <div className="mb-2 mt-1 md:mb-0">
        <p className="text-sm">
          &copy; {currentYear}, Built with ❤️ by{" "}
          <a
            href="https://suman-mondal-portfolio.vercel.app/"
            target="_blank"
            className="font-semibold cursor-pointer"
          >
            Suman
          </a>
        </p>
      </div>
      <div className="pt-6 md:pt-0 mt-0 lg:-mt-6 flex items-center justify-center">
        <Dock className="flex items-center">
          <DockIcon className="">
            <Link href="https://www.instagram.com/suman_0.3" target="_blank">
              <Instagram className="size-6" />
            </Link>
          </DockIcon>
          <DockIcon className="">
            <Link href="https://github.com/suman-3" target="_blank">
              <Github className="size-6" />
            </Link>
          </DockIcon>
          <DockIcon className="">
            <Link href="https://www.linkedin.com/in/mon03" target="_blank">
              <LinkedIn className="size-6" />
            </Link>
          </DockIcon>
          <DockIcon className="">
            <Link href="https://wa.me/+919832800571" target="_blank">
              <Whatsapp className="size-6" />
            </Link>
          </DockIcon>
        
        </Dock>
      </div>
    </div>
  );
};
