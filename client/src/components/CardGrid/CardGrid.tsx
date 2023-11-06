import type { CardType, CardArray } from "~/types";
import { Card } from "~/components";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CardGrid({ cards }: CardArray) {
  const [animationComplete, setAnimationComplete] = useState(false);

  const cardItems = cards;

  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardItems.map((card: CardType, index: number) => (
          <motion.div
            key={index}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.75,
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: index * 0.3,
                  duration: 1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setAnimationComplete(true)}
            className={animationComplete ? "z-1" : "z-[-1]"}  
          >
            <Card {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
