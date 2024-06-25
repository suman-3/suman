"use client";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuList } from "@/constant/menulist";
import { cn } from "@/lib/utils";
import { SignedOut } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

interface MobileNavProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-2 pt-7">
      {MenuList.map((menu) => {
        const active = pathname === menu.href || pathname.includes(menu.href);

        // TODO

        return (
          <SheetClose asChild key={menu.id}>
            <Link
              href={menu.href}
              key={menu.id}
              className={cn(
                "flex gap-2 items-center mb-2 p-3 hover:bg-primary hover:text-white rounded-md transition duration-200 cursor-pointer select-none",
                active && "bg-primary text-white"
              )}
            >
              <menu.icon className="size-4 shrink-0" />
              <h2 className="text-sm capitalize">{menu.label}</h2>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className={cn(className)}>
        <AlignJustify className="size-7 shrink-0" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none flex flex-col gap-6"
      >
        <Logo />

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>

        <SignedOut>
          <SheetClose asChild>
            <Button
              size="sm"
              className="rounded-[3px] w-[120px] bg-primary/25 text-primary hover:bg-primary/40 hover:text-primary transition-all duration-200 border-primary/20 border"
              variant="ghost"
            >
              Log In
            </Button>
          </SheetClose>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
