import { IoIosRocket } from "react-icons/io";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="text-white mt-24">
        <h1 className="text-[40px] font-semibold mb-6">
          nis.devs — коммьюнити разработчиков со всех сфер Назарбаев
          Интеллектуальной Школы
        </h1>
        <p className="text-[24px] text-[#9C9C9C] mb-14">
          Мы вносим вклад в развитие школьной сферы путем создания <br />
          различных продуктов
        </p>
        <img src="/hr.png" alt="hr" className="w-[100%]" />
      </div>

      <div className="mt-24">
        <div className="flex gap-x-4">
          <IoIosRocket className="text-[#d62828] w-[60px] h-[60px]" />
          <h1 className="font-bold text-[40px] text-white">Наши цели</h1>
        </div>
        <p className="text-[#9C9C9C] text-[28px] mt-2 mb-10">
          С вами мы сможем их достичь!
        </p>
        <div className="flex justify-between items-center">
          <p className="text-[#9c9c9c] text-[20px] leading-[60px]">
            {">"} Постить интересный контент в{" "}
            <a
              href="https://instagram.com/nis.devs"
              className="text-[#fed448] font-semibold"
              target="_blanc"
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
              target="_blanc"
            >
              GitHub
            </a>
            <br />
            {">"} Собрать коммьюнити developer’ов НИШ
          </p>
          <img src="/growth.png" alt="growth" />
        </div>
      </div>

      <div className="mt-24 text-[#9C9C9C] ">
        <div className="flex gap-x-4">
          <BiLinkAlt className="text-[#fed448] w-[60px] h-[60px]" />
          <h1 className="font-bold text-[40px] text-white">Связаться</h1>
        </div>
        <p className="text-[28px] mt-2 mb-10">
          Так вы станете частью нашего коммьюнити!
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <a
              className="text-white w-40 h-40 bg-[#242424] rounded-lg flex items-center justify-center mb-2 hover:bg-[#202020] hover:text-white/90 hover:transition-[5s]"
              href="https://instagram.com/nis.devs"
              target="_blanc"
            >
              <AiFillInstagram className="w-20 h-20" />
            </a>
            <p>Instagram</p>
          </div>
          <div className="flex flex-col items-center">
            <a
              className="text-white w-40 h-40 bg-[#242424] rounded-lg flex items-center justify-center mb-2 hover:bg-[#202020] hover:text-white/90 hover:transition-[5s]"
              href="https://github.com/nis-devs"
              target="_blanc"
            >
              <AiFillGithub className="w-20 h-20" />
            </a>
            <p>GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <a
              className="text-white w-40 h-40 bg-[#242424] rounded-lg flex items-center justify-center mb-2 hover:bg-[#202020] hover:text-white/90 hover:transition-[5s]"
              href="https://discord.gg/UAnn4gS3"
              target="_blanc"
            >
              <IoLogoDiscord className="w-20 h-20" />
            </a>
            <p>Discord</p>
          </div>
        </div>
      </div>
    </>
  );
}
