'use client'

import React from "react";
import { IoIosRocket } from "react-icons/io";
import { motion } from "framer-motion";

export default function Goals() {
  return (
    <motion.div
      className="mt-24"
      id="goals"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex gap-x-4">
        <IoIosRocket className="text-[#d62828] md:w-[60px] md:h-[60px] w-[40px] h-[40px]" />
        <h1 className="font-bold md:text-[40px] text-[30px] text-white">
          Наши цели
        </h1>
      </div>
      <p className="text-[#c1c1c1] md:text-[28px] text-[20px] mt-2 mb-10">
        С вами мы сможем их достичь!
      </p>
      <div className="md:flex justify-between items-center">
        <p className="text-[#9c9c9c] md:text-[20px] text-[16px] md:leading-[60px] leading-[40px] md:mb-0 mb-6">
          {">"} Постить интересный контент в{" "}
          <a
            href="https://instagram.com/nis.devs"
            className="text-[#fed448] font-semibold"
            target="_blank"
          >
            Instagram
          </a>
          <br />
          {">"} Облегчить жизнь учеников и учителей
          <br />
          {">"} Стабильная разработка проектов в{" "}
          <a
            href="https://github.com/nis-devs"
            className="text-[#fed448] font-semibold"
            target="_blank"
          >
            GitHub
          </a>
          <br />
          {">"} Собрать коммьюнити developer’ов НИШ
        </p>
        <img src="/growth.png" alt="growth" className="mx-auto md:mx-0" />
      </div>
    </motion.div>
  );
}
