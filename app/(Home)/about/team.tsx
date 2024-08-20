"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import vesion from "../../../public/assets/veson.png";

const team = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full">
      <h1 className="text-purple-color  space-x-5 font-black mt-5 text-2xl mb-4 text-center ">
        أعضاء الفريق
      </h1>
      <motion.div
        className="bg-white bg-opacity-10 w-full min-h-[calc(100vh+2rem)] pt-24 relative mt-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center px-5 container mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="w-full md:w-1/2 lg:w-[450px] h-auto mb-6 md:mb-0"
            variants={itemVariants}
          >
            <h1 className="text-purple-color w-[220px] space-x-5 font-black mt-5 text-2xl mb-4 text-center">
              جودت شلبي
            </h1>
            <h1 className="text-[20px] mb-5">
              هو قائد فريقنا والرؤية الدافعة خلف نجاحاتنا. يتمتع بخبرة تمتد
              لأكثر من [عدد السنوات] في مجال تطوير البرمجيات وإدارة الفرق
              التقنية، حيث يتخصص في برمجة الـBack-End وتصميم البنية التحتية
              للأنظمة. بفضل معرفته العميقة بلغات البرمجة وتقنيات السيرفرات
              وقواعد البيانات، يضمن [اسم المدير] أن تكون حلولنا التقنية موثوقة،
              آمنة، وقابلة للتطوير.
            </h1>
          </motion.div>
          <motion.div
            className="w-full flex justify-center md:w-1/2"
            variants={itemVariants}
          >
            <Image
              src={'/assets/jawdat.png'}
              height={150}
              width={150}
              alt="imagehome"
              loading="lazy"
              className="w-[12rem] sm:w-[16rem] lg:w-[28rem]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="absolute lg:-bottom-[10%] sm:-bottom-[12%]  flex w-full"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default team;
