"use client";

import { motion, useMotionValue } from "framer-motion";
import { RemixiconReactIconComponentType } from "remixicon-react";

type AchievementsProps = {
  title: string;
  amount: number;
  icon: RemixiconReactIconComponentType;
};

const Achievements: React.FC<AchievementsProps> = ({
  title,
  amount,
  icon: Icon,
}) => {
  const number = useMotionValue(0);

  const count = (amount: number) => {
    let i = 0;
    const updateCount = () => {
      let timeout;
      if (i <= amount) {
        number.set(i++);
        timeout = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeout);
      }
    };

    updateCount();
  };
  return (
    <div className="flex items-end gap-x-3">
      <Icon className="text-4xl lg:text-2xl text-gray-300" />
      <h1 className="flex flex-col gap-y-2">
        <motion.span
          className="text-2xl lg:text-xl font-light text-yellow-500"
          onViewportEnter={() => count(amount)}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500">{title}</span>
      </h1>
    </div>
  );
};

export default Achievements;
