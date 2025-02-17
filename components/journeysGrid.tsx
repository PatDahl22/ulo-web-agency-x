import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/SectionBento-grid";

interface Journey {
  title: string;
  description: string;
  className: string;
}

interface JourneysGridProps {
  journeys: Journey[];
} 

const JourneysGrid: React.FC<JourneysGridProps> = ({ journeys }) => {

  return (
    <div>
      <BentoGrid className="w-full items-center justify-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6">
        {journeys.map((journey, index) => (
          <BentoGridItem
            key={index}
            title={<h3 className="text-xl font-bold">{journey.title}</h3>}
            description={<p>{journey.description}</p>}
            className={`${
              index === 1 || index === 2 || index === 5 ? "md:col-span-2" : ""
            } ${index === 6 ? "md:col-span-3" : ""}`}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
export default JourneysGrid;
