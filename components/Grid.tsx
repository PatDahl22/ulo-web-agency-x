import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <BentoGrid className="w-full p-8 py-8 items-center justify-center md:grid-cols-5 lg:grid-cols-5 sm:grid-cols-2 gap-6 grid">
      {gridItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={`
          ${i === 0 ? "md:col-span-2" : ""} 
          ${i === 1 ? "lg:col-span-3 md:col-span-2" : ""} 
          ${i === 5 ? "flex justify-center md:col-span-3" : ""} 
          ${i === 2 ? "lg:col-span-3 md:col-span-2" : ""} 
          ${i === 3 ? "md:col-span-2" : ""} 
          ${i === 4 ? "md:col-span-2" : ""} `}
          id={item.id}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
        />
      ))}
    </BentoGrid>
  );
};


export default Grid;
