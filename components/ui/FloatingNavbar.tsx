"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { UrlObject } from "url";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    [x: string]: any;
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  projectLinks?: {
    name: string;
    link: string;
  }[];
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // Dropdown state
  const previousScroll = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((current) => {
      if (typeof current !== "number") return;

      const previous = previousScroll.get();
      const direction = current - previous;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }

      previousScroll.set(current);
    });

    return () => unsubscribe();
  }, [scrollYProgress, previousScroll]);

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {navItems.map((navItem, idx) => {
            if (navItem.name === "Projects") {
              return (
                <div key={idx} className="relative">
                  <button
                    onClick={toggleProjects}
                    className={cn(
                      "relative dark:text-neutral-50 items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                    )}
                  >
                    <span className="text-sm !cursor-pointer"> Projects</span>
                  </button>
                  {isProjectsOpen && (
                    <motion.div
                      className={cn(
                        "absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 rounded-md bg-purple ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                      )}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      {navItem.projectLinks.map(
                        (
                          project: {
                            link: string | UrlObject;
                            name:
                              | string
                              | number
                              | bigint
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | Promise<React.ReactNode>
                              | null
                              | undefined;
                          },
                          projectIdx: any
                        ) => (
                          <Link
                            key={`project-${projectIdx}`}
                            href={project.link}
                            className={cn(
                              "relative inline-block text-center py-2 items-center w-full h-full dark:text-neutral-50 space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                            )}
                          >
                            {" "}
                            {project.name && typeof project.name === "object" && "then" in project.name ? "Loading..." : project.name}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </div>
              );
            } else {
              return (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className=" text-sm !cursor-pointer">
                    {navItem.name}
                  </span>
                </Link>
              );
            }
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
