import React from "react";

import { Approachs } from "@/data";
import { Button } from "./ui/MovingBorders";

const Approach = () => {
  return (
    <div className="py-10 w-full mx-auto">
      <h1 className="heading">
        My <span className="text-purple"> Approachs</span>
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 w-full h-auto items-center justify-center gap-6 my-10">
        {Approachs.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 gap-6"
          >
            <div className="flex lg:flex-row flex-col-reverse items-center justify-center p-8">
              <div>
                  <img
                    src={card.img}
                    alt={card.img}
                    className="w-16 py-4"
                  />
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.icon}
                </h1>
                <h3 className="text-start text-sm md:text-xl mt-3 font-semibold">
                  {card.title}
                </h3>
                <p className="text-start text-white-100 mt-3 ">{card.des}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Approach;
