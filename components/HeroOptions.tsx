import Image from "next/image";
import React from "react";

function FillTheFormCard({
  title,
  main,
  description,
  image,
  hoverImage,
  onClick,
}: {
  title: string;
  main: string;
  description: string;
  image: string;
  hoverImage: string;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group w-[360px] cursor-pointer bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_feat8r.png')] before:bg-[length:352px_382px] rounded-2xl border "
    >
      <div className="relative">
        <div className="px-6 py-5">
          <div className="group-hover:bg-blue-400 bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1">
            {title}
          </div>
          <span className="text-lg inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
            {main}
          </span>

          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
          <Image
            className="group-hover:opacity-0 transition-opacity duration-500  object-cover"
            src={image}
            width={350}
            height={240}
            alt="Card image 01"
          />
          <Image
            className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity  object-cover duration-300"
            src={hoverImage}
            width={350}
            height={240}
            alt="Card image 01 displaying on hover"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default FillTheFormCard;
