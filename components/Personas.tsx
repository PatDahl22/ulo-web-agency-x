import { project1Items } from "@/data";
import { GlowingEffect } from "./ui/glowing-effect";

interface PersonasProps {
  area: string;
  icon: string; 
  title: string;
  description: React.ReactNode;
}

export const Personas = ({ area, icon, title, description }: PersonasProps) => {
  return (
    <li
      className="min-h-[14rem] list-none"
      style={{ gridArea: area.split(":")[1]?.trim() || "auto" }} // Apply inline style!
    >
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />{" "}
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {/*  If icon is a path: */}
              <img src={icon} alt={title} width={32} height={32} />

              {/* If icon is JSX:
              {icon}
               */}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

// Example usage (in a parent component):

const ParentComponent = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {" "}
      {/* This is the important part! */}
      {project1Items.Personas1.map((persona, index) => (
        <Personas key={index} {...persona} />
      ))}
    </ul>
  );
};