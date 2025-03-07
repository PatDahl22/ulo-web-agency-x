"use client";
import React, { useState, JSX, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Card = {
  [x: string]: ReactNode;
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const [hoveredCard, setHoveredCard] = useState<Card | null>(null);


  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  const handleMouseEnter = (card: Card) => {
    setHoveredCard(card); // Set hovered card ID
  };

  const handleMouseLeave = () => {
    setHoveredCard(null); // Clear hovered card ID
  };

  return (
    <div className="w-full h-[50rem] py-4 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 max-w-7xl mx-auto gap-6 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            onMouseEnter={() => handleMouseEnter(card)}
            whileHover={{
              y: -20,
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-2/3 md:h-full w-full md:w-1/2 m-auto z-10 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-10 rounded-xl h-full w-full "
                : "rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
            {/* Overlay: Show on hover */}
            {hoveredCard?.id === card.id && (
              <div className="absolute inset-0 bg-black-200 opacity-80 flex justify-center items-center">
                <span className="text-white font-bold text-4xl">
                  {card.name}
                </span>{" "}
                {/* Card name on top of overlay */}
              </div>
            )}{" "}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="600"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-center rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black-100 opacity-80 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 py-2 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
