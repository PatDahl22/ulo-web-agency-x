import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/SectionBento-grid";

interface Journey {
  title: string;
  description: string;
}

interface JourneysGridProps {
  journeys: Journey[];
} 

const JourneysGrid: React.FC<JourneysGridProps> = ({ journeys }) => {

  return (
    <div>
      <BentoGrid className="w-full items-center justify-center">
        {journeys.map((journey, index) => (
          <BentoGridItem
            key={index} // Using index as key since id is not available
            className="py-4 bg-black-100 text-white row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input"
            title={<h3 className="text-xl font-bold">{journey.title}</h3>}
            description={<p>{journey.description}</p>}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
export default JourneysGrid;
