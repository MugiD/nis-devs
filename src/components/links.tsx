'use client'

import { BiLinkAlt } from "react-icons/bi";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import React from "react";
import { motion } from 'framer-motion'

export default function Links() {
  return (
    <motion.div
      className="mt-24 text-[#9C9C9C]"
      id="links"
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex gap-x-4">
        <BiLinkAlt className="text-[#fed448] md:w-[60px] md:h-[60px] w-[40px] h-[40px]" />
        <h1 className="font-bold md:text-[40px] text-white text-[30px]">
          Связаться
        </h1>
      </div>
      <p className="md:text-[28px] mt-2 mb-10 text-[20px] text-[#c1c1c1]">
        Так вы станете частью нашего коммьюнити!
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <a
            className="text-white md:w-40 md:h-40 w-20 h-20 bg-[#242424] rounded-lg flex items-center justify-center mb-2 hover:bg-[#202020] hover:text-white/90 hover:transition-[5s]"
            href="https://instagram.com/nis.devs"
            target="_blank"
          >
            <AiFillInstagram className="md:w-20 md:h-20 w-10 h-10" />
          </a>
          <p>Instagram</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            className="text-white md:w-40 md:h-40 w-20 h-20 bg-[#242424] rounded-lg flex items-center justify-center mb-2 hover:bg-[#202020] hover:text-white/90 hover:transition-[5s]"
            href="https://github.com/nis-devs"
            target="_blank"
          >
            <AiFillGithub className="md:w-20 md:h-20 w-10 h-10" />
          </a>
          <p>GitHub</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            className="text-white md:w-40 md:h-40 w-20 h-20 bg-[#242424] rounded-lg flex items-center justify-center mb-2 hover:bg-[#202020] hover:text-white/90 hover:transition-[5s]"
            href="https://discord.gg/UAnn4gS3"
            target="_blank"
          >
            <IoLogoDiscord className="md:w-20 md:h-20 w-10 h-10" />
          </a>
          <p>Discord</p>
        </div>
      </div>
    </motion.div>
  );
}
