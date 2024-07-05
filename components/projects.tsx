"use client";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";

import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="py-10 flex-wrap px-6 md:px-20 lg:px-32 flex items-center justify-center gap-5 overflow-hidden">
      <div className="flex flex-wrap gap-4 sm:grid grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-secondary/40 p-1 rounded-md flex flex-col justify-center items-center gap-3"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-64 sm:h-44 rounded-md"
            />
            <div className="px-2.5 mb-2.5">
              <h1 className="text-lg font-medium">{project.title}</h1>
              <p className="text-sm text-gray-400">{project.description}</p>
              <div className="mt-3 flex gap-3">
                <Link
                  href={project.link}
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  <Button size="sm">
                    View <ArrowRight className="w-4 h-4 -rotate-45" />
                  </Button>
                </Link>
                <Link
                  href={project.github}
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  <Button variant="secondary" size="sm" className="px-2.5">
                    <FaGithub className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
