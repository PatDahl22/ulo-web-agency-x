import { projects } from "@/data";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Example icon

interface Props {
  className?: string;
}

const RecentProjects = ({ className }: Props) => {
  return (
    <section className={cn("w-full py-10", className)}>
      <h1 className="heading">
        My <span className="text-purple">projects</span>
      </h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`} // Dynamic link to project page
            className="group relative w-full h-full overflow-hidden rounded-md shadow-lg transition-transform hover:scale-105 duration-300"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={project.img}
                alt={project.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {project.name}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.des}
              </p>
              <div className="mt-4 flex items-center justify-end">
                <span className="text-purple font-medium mr-2">Read More</span>
                <ArrowRightIcon className="h-5 w-5 text-purple transition-transform group-hover:translate-x-1 duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
