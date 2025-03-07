import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    [x: string]: any;
    title: string;
    des: string[]; // Array of descriptions
    link: string;
    imageId?: string;
    imageUrl?: string; // Optional image URL
    projectId?: string; // Optional project ID
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-4 gap-6 w-full h-full",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            {/* Render the image if imageUrl or imageId is provided */}
            {item.imageUrl && (
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="w-full h-auto sm:w-auto sm:h-auto mx-auto"
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </div>
            )}

            <CardTitle className="px-8 py-4 md:px-2 text-2xl text-black dark:text-white">
              {item.title}
            </CardTitle>

            {item.des && item.des.length > 0 && (
              <ul className="px-6 md:px-2 text-start text-base text-black dark:text-white-100">
                {item.des.map((description, index) => (
                  <li className="py-2" key={index}>{description}</li>
                ))}
              </ul>
            )}

            {/* "Read More" Link (separate from card hover effect) */}
            {item.projectId && (
              <div className="mt-4 flex items-center justify-end">
                <Link
                  href={item.link}
                  className="text-purple font-medium mr-2 hover:underline"
                >
                  Read More
                </Link>
                <ArrowRightIcon className="h-5 w-5 text-purple transition-transform group-hover:translate-x-1 duration-300" />
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full py-4 overflow-hidden bg-black-200 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-zinc-100 font-bold tracking-wide text-lg",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-200 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
