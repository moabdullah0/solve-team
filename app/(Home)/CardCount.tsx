"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountHome } from "@/constant/CountHome";

const CardCount = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full py-10  ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center px-10">
        {CountHome.map((count,i) => (
          <motion.div
            key={i}
            className="bg-purple-color w-[9rem] sm:w-[11rem] lg:w-[13rem] h-[7rem] p-2 rounded-xl flex items-center"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <div className="flex justify-around  w-full">
              <div className="text-start ">
                <span className="text-secondary-color font-bold block">
                  +<CountUp start={0} end={count.count} />
                </span>
                <p className="text-white font-bold">{count.title}</p>
              </div>
              <Image
                src={count.image}
                alt={count.title}
                height={35}
                width={35}
            loading="lazy"

                className="mr-3"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardCount;