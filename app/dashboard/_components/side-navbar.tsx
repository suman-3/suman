"use client";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { MenuList } from "@/constant/menulist";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen p-5 shadow-sm border-r flex flex-col gap-2 justify-start">
      <Link href="/" className="cursor-pointer flex flex-col space-y-2">
        <Logo />
        <Separator />
      </Link>
      <div className="mt-12">
        {MenuList.map((menu) => {
          const active = pathname.includes(menu.href);

          return (
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
          );
        })}
      </div>
    </div>
  );
};
