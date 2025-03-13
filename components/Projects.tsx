import React from 'react'

interface Project {
  title: string;
  des: string[];
  img: string;
  link: string;
  id: number;
}
import { projects } from "@/data";
import { GlowingEffect } from './ui/glowing-effect';

const Projects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        My <span className="text-purple">projects</span>
      </h1>
      <div className="relative h-full w-full py-2 mt-8 rounded-xl border-0.75">
        {/* Glowing effect component */}
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <ul>
          {projects.map((item: Project, index: number) => (
            <li key={index}>
              <div>{item.title}</div>
              <div>{item.des}</div>
              <img src={item.img} alt={item.title} />
              <a href={item.link}>View Project</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects