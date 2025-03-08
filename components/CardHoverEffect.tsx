import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import { projects } from "@/data";

const CardHoverEffect = () => {
  return (
    <div className='py-20'>
    <h1 className="heading">
        My <span className="text-purple">projects</span>
      </h1>
      <div className="mx-auto gap-6">
        <HoverEffect
            items={projects.map((item) => ({
                title: item.title,
                des: item.des,
                imageUrl: item.img, 
                link: item.link,
                projectId: item.id.toString(),
            }))}
        />
      </div>
    </div>
  );
}

export default CardHoverEffect