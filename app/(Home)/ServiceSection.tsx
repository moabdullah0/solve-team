import React, { useRef } from "react";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

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
    hidden: { opacity: 0, y: 20, x: -20 },
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-secondary-color bg-opacity-10 py-10 mt-5 px-5"
    >
      <h1 className="text-center text-blue-color text-[1.8rem] font-bold">
        خدماتنا
      </h1>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5 container mx-auto items-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-gray-300 btn-border w-full h-[22rem] flex flex-col items-center rounded-3xl justify-center p-5"
        >
          <Image
            src={"/assets/Design.png"}
            alt="training"
            height={150}
            width={150}
          />
          <h1 className="text-center text-white">
            توفير قاعات تدريب مجهزة بأحدث التقنيات
          </h1>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-gray-300 btn-border w-full h-[22rem] flex flex-col items-center rounded-3xl justify-center p-5"
        >
          <Image
            src={"/assets/Programming.png"}
            alt="training"
            height={150}
            width={150}
          />
          <h1 className="text-center text-white">
            استضافة مدربين ذوي خبرة ومتخصصين في مجالات متعددة
          </h1>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-gray-300 btn-border w-full h-[22rem] flex flex-col items-center rounded-3xl justify-center p-5"
        >
          <Image
            src={"/assets/Programming.png"}
            alt="training"
            height={150}
            width={150}
          />
          <h1 className="text-center text-white">
          تقديم حلول برمجية متطورة 
          </h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;