"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="text-white mt-24 py-6"
      id="about"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="lg:text-[40px] text-[24px] font-semibold lg:mb-6 mb-2">
        nis.devs — коммьюнити разработчиков со всех сфер Назарбаев
        Интеллектуальной Школы
      </h1>
      <p className="lg:text-[24px] text-[18px] text-[#9C9C9C] lg:mb-14 mb-8">
        Мы вносим вклад в развитие школьной сферы путем создания <br />
        различных продуктов
      </p>
      <img src="/hr.png" alt="hr" className="w-[100%]" />
    </motion.div>
  );
}
