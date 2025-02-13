import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data"; // Import the gridItems data from data/index.ts

const Grid = () => {
  return (
    <BentoGrid className="gap-6">
      {gridItems.map((item) => (
        <BentoGridItem
          key={item.id} // Make sure to use unique key
          title={item.title}
          description={item.description}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          id={item.id} // Use item.id instead of hardcoding
        />
      ))}
    </BentoGrid>
  );
};

export default Grid;
