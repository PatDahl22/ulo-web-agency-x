import React from "react";
import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { IconProps } from "@tabler/icons-react";

const Grid = () => {
  return (
    <>
      <BentoGrid className="w-full ">
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg, icon }, i) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            icon={icon as React.FunctionComponentElement<IconProps & React.RefAttributes<SVGSVGElement>>}
          />
        ))}
      </BentoGrid>
    </>
  );
};

export default Grid;
