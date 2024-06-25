import AnimatedShinyText from "@/components/magicui/shiny-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { ArrowRightIcon, Search } from "lucide-react";
import { HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className="w-full border-b py-5 h-full flex items-center justify-between px-10">
      <div className="flex items-center max-w-lg bg-primary rounded-md">
        <Input type="text" placeholder="Search" className="" />
        <Button className="flex items-center justify-center">
          <Search className="size-5 shrink-0 text-white" />
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <h2 className="bg-primary px-3 py-1.5 rounded-full text-xs text-white cursor-pointer select-none">
          🔥Join Us just for $5.99/Month
        </h2>
        <ClerkLoading>
          <Skeleton className="h-10 w-10 rounded-full bg-gray-700/50 dark:bg-gray-300/40" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-9 w-9",
              },
            }}
          />
        </ClerkLoaded>
      </div>
    </div>
  );
};
