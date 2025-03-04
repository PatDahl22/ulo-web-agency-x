import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import { projects } from "@/data";

const CardHoverEffect = () => {
  return (
    <>
    <h1 className="heading">
        My <span className="text-purple">projects</span>
      </h1>
      <div className="max-w-5xl mx-auto px-8 gap-6">
        <HoverEffect
            items={projects.map((item) => ({
                title: item.title,
                des: item.des,
                imageUrl: item.img, // Corrected: use imageUrl for the image path
                link: item.link,
                projectId: item.id.toString(),
            }))}
        />
      </div>
    </>
  );
}

export default CardHoverEffect