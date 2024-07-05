"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Instagram, Loader2 } from "lucide-react";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa6";

export default function Hero() {
  const [state, handleSubmit] = useForm("xwpekrdv");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent ✨");
      setIsDialogOpen(false);
    }
  }, [state.succeeded]);

  return (
    <section className="py-10 mt-2 px-7 md:px-20 lg:px-32">
      <div className="grid gap-3 max-w-2xl">
        <h2 className="text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-4xl">
          <span className="font-serif">I</span> am{" "}
          <span className="font-serif">S</span>uman{" "}
          <span className="font-serif">M</span>ondal,{" "}
          <span className="animate-text-gradient sm:inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 italic">
            self-taught full stack developer
          </span>{" "}
          from <span className="font-medium">India.</span>
        </h2>
        <p className="text-base text-gray-400 -mt-1 mb-3">
          A full stack developer with a passion for creating modern and
          intuitive web applications.
        </p>
        <div className="flex gap-3">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="gooeyLeft">Get In Touch</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Get in touch</DialogTitle>
                <DialogDescription>
                  <p>Fill in the form to get in touch with me.</p>
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-2">
                  <Label htmlFor="name" className="-mb-2">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Name"
                    type="text"
                    required
                    name="name"
                  />
                  <Label htmlFor="email" className="-mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Email"
                    type="email"
                    required
                    name="email"
                  />
                  <Label htmlFor="message" className="-mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="max-h-[80px] resize-none"
                    required
                    name="message"
                  />
                  <Button
                    type="submit"
                    className="mt-1"
                    variant="shine"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending" : "Send"}
                    {state.submitting ? (
                      <Loader2 className="w-5 h-5 animate-spin ml-2" />
                    ) : (
                      ""
                    )}
                  </Button>
                  <div className="flex gap-3 items-center">
                    <span className="text-sm text-gray-500">or</span>
                    <div className="flex items-center gap-2">
                      <Link href="https://www.instagram.com/suman_0.3">
                        <span className="cursor-pointer hover:bg-primary transition hover:text-primary-foreground bg-secondary/50 p-2 text-xs flex gap-1 items-center w-fit rounded-md px-3">
                          <Instagram className="h-3 w-3" />
                          Instagram
                        </span>
                      </Link>
                      <Link href="mailto:mondalsuman97322@gmail.com">
                        <span className="cursor-pointer hover:bg-primary transition hover:text-primary-foreground bg-secondary/50 p-2 text-xs flex gap-1 items-center w-fit rounded-md px-3">
                          hi@suman.mondal
                        </span>
                      </Link>
                      <Link href="https://github.com/suman-3" target="_blank">
                        <div className="cursor-pointer hover:bg-primary transition hover:text-primary-foreground bg-secondary/50 p-2 text-xs flex gap-1 items-center w-fit rounded-md px-3">
                        <FaGithub className="h-4 w-4" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </DialogContent>
          </Dialog>
          <Link href="https://sumanmondal.xyz" target="_blank">
            <Button variant="outline" className="flex items-center gap-1">
              Resume <IoOpenOutline className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
