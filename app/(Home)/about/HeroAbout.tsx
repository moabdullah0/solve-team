"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonStyle from "@/components/ButtonStyle";
import img from '../../../public/assets/Group4.png'
import NavbarDesktop from "@/components/Navbar";

const HeroSection = () => {
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
    <div>
      <NavbarDesktop/>
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
          <h1 className="text-purple-color w-[220px] space-x-5 font-black mt-5 text-2xl mb-4">
            حول الفريق
          </h1>
          <h1 className="text-[20px] mb-5">
            نحن فريق [اسم الفريق]، مجموعة من المحترفين المتحمسين الذين يجمعهم
            الشغف بالتكنولوجيا والابتكار. تأسس فريقنا بهدف تقديم حلول تقنية
            متكاملة تلبي احتياجات عملائنا وتسهم في تحقيق رؤيتهم. نعتمد في عملنا
            على مزيج من الخبرات المتنوعة في مجالات تطوير الويب، تطوير التطبيقات،
            DevOps، وتصميم واجهات المستخدم (UI/UX)، مما يمكننا من تقديم خدمات
            متكاملة ومتميزة.
          </h1>
          <div className="flex gap-5">
            <ButtonStyle
              className="bg-purple-color w-full md:w-[12rem] h-[3rem] px-3 py-2 rounded-full border-2 hover:border-border duration-200 border-secondary-color  text-white font-bold outline-5 outline-secondary-color"
              title="  ابدا بالعمل معنا "
              link="/components/about"
            />
            <ButtonStyle
              className="text-purple-color w-full md:w-[12rem] h-[3rem] px-3 py-2 rounded-full border-2 hover:border-border duration-200 border-secondary-color   font-bold outline-5 outline-secondary-color"
              title="    استعراض المشاريع "
              link="/components/about"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full flex justify-center md:w-1/2"
          variants={itemVariants}
        >
          <Image
            src={img}
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
      >
      </motion.div>
    </motion.div>
    </div>
    
  );
};

export default HeroSection;
