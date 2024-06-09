import { StaticImageData } from "next/image";
import { MdxImage as Image } from "../../core/Mdx";
import React from "react";

interface Props {
  image: StaticImageData;
  title: string;
  percent: string;
}
const SkillCard = ({ image, title, percent }: Props) => {
  return (
    <div className="p-6 hover:bg-red-800 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[16px] mt-[1rem] text-white font-[600]">{title}</h1>
      <div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
