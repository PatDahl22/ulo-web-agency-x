"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const productsPerRow = 4;
  const firstRow = products.slice(0, productsPerRow);
  const secondRow = products.slice(3, products.length);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
 
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

 return (
   <div
     ref={ref}
     className="h-[150rem] relative z-20 w-screen py-10 overflow-hidden antialiased flex flex-col self-auto [perspective:500px] [transform-style:preserve-3d]"
   >
     <motion.div
       style={{
         rotateX,
         rotateZ,
         translateY,
         opacity,
       }}
       className=""
     >
       <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 mb-6">
         {firstRow.map((product) => (
           <ProductCard
             product={product}
             translate={translateX}
             key={product.title}
           />
         ))}
       </motion.div>
       <motion.div className="flex flex-row m-10 space-x-6">
         {secondRow.map((product) => (
           <ProductCard
             product={product}
             translate={translateXReverse}
             key={product.title}
           />
         ))}
       </motion.div>
     </motion.div>
   </div>
 );
};


export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] rounded-2xl border relative flex-shrink-0 overflow-hidden"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black-200 pointer-events-none"></div>
      <h2 className="absolute bottom-10 left-10 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
