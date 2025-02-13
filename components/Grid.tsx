import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid"; // Import BentoGrid and BentoGridItem
import { FC } from "react";
import Link from "next/link";

interface GridItem {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
}

interface GridProps {
  gridItems: GridItem[];
}

const Grid: FC<GridProps> = ({ gridItems }) => {
  if (!gridItems || gridItems.length === 0) {
    return <div>No items available</div>; // Fallback if gridItems is empty
  }

  return (
    <BentoGrid className="gap-6">
      {gridItems.map((item) => (
        <Link href={item.link} key={item.id}>
          <BentoGridItem
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            imgClassName="h-full"
            titleClassName="text-white"
            spareImg=""
          />
        </Link>
      ))}
    </BentoGrid>
  );
};

export default Grid;
