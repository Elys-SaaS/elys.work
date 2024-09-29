import React from "react";
import { cn } from "@/app/utils";
import Image from "next/image";
import tr from "@/locale/tr";
import en from "@/locale/en";
import { useLang } from "@/app/context/LangContext/LangContext";
import { pps } from "@/lib/fonts";

const techs: {
  name: keyof typeof tr | keyof typeof en;
  description: keyof typeof tr | keyof typeof en;
  icon: string;
}[] = [
  {
    name: "AI-Powered Services and Consulting",
    description: "AI-Powered Services and ConsultingDesc",
    icon: "/static/ai2.png",
  },
  {
    name: "Web3 and Crypto Development",
    description: "Web Development ServicesDesc",
    icon: "/static/web3_logo.png",
  },
  {
    name: "Web Development Services",
    description: "Web Development ServicesDesc",
    icon: "/static/webdev.png",
  },
  {
    name: "Mobile App Development",
    description: "Mobile App DevelopmentDesc",
    icon: "/static/mobile-app.png",
  },
  {
    name: "Cloud Based Applications",
    description: "Cloud Based ApplicationsDesc",
    icon: "/static/cloud-data.png",
  },
];

function WhatWeAreDoing() {
  const { t } = useLang();
  return (
    <div className={cn("mx-auto max-w-[93rem] mt-20 w-full", pps.className)}>
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Technologies We Provide Support For
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {techs.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                index === techs.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <Image src={item.icon} alt={item.name} width={200} height={200} />
              <h2 className="text-2xl font-bold mt-4">{t(item.name)}</h2>
              <p className="text-lg text-center mt-2">{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-24 flex flex-col items-center justify-center">
        <div>
          <Image
            src={"/static/platform-support.png"}
            alt="And More"
            width={400}
            height={400}
          />
        </div>
        <h1 className="text-4xl font-bold">
          {t("And more.. Just imagine, and we will make it happen for you!")}
        </h1>
      </div>
    </div>
  );
}

export default WhatWeAreDoing;
