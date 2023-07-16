import { Zen_Dots } from "next/font/google";

const zen = Zen_Dots({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <div className="mt-16">
      <h1 className={`md:text-[28px] text-[20px] text-white mb-8 ${zen.className}`}>
          nis.devs
      </h1>
      <div className="text-[#9C9C9C] flex gap-x-12 font-light cursor-pointer md:text-[24px text-[18px]">
        <a className="hover:text-[#E7E7E7] hover:border-b-2 hover:transition-[5s]" href="#about">о нас</a>
        <a className="hover:text-[#E7E7E7] hover:border-b-2 hover:transition-[5s]" href="#goals">цели</a>
        <a className="hover:text-[#E7E7E7] hover:border-b-2 hover:transition-[5s]" href="#links">связаться</a>
      </div>
    </div>
  );
}
