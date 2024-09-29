"use client";
import { cn } from "@/app/utils";
import Image from "next/image";
import { useLang } from "@/app/context/LangContext/LangContext";
import tr from "@/locale/tr";
import en from "@/locale/en";
import { pps } from "@/lib/fonts";

const why: {
  name: keyof typeof tr | keyof typeof en;
  description: keyof typeof tr | keyof typeof en;
  icon: string;
}[] = [
  {
    name: "Affordable",
    description: "AffordableDesc",
    icon: "/static/affordable.png",
  },
  {
    name: "Swift and Tailored Customer Care",
    description: "Swift and Tailored Customer CareDesc",
    icon: "/static/customersup.png",
  },
  {
    name: "Customized Solutions",
    description: "Customized SolutionsDesc",
    icon: "/static/customized.png",
  },
  {
    name: "Fast and Reliable",
    description: "Fast and ReliableDesc",
    icon: "/static/fast.png",
  },
  {
    name: "Ready for Use in No Time",
    description: "Ready for Use in No TimeDesc",
    icon: "/static/plug-in.png",
  },

  {
    name: "Data Analysis and Visualization",
    description: "Data Analysis and VisualizationDesc",
    icon: "/static/data-analyst.png",
  },
];

function WhyElys() {
  const { t } = useLang();
  return (
    <div className={cn("mx-auto max-w-[93rem] mt-20 w-full", pps.className)}>
      <div className="text-center">
        <h1 className="text-4xl font-bold">{t("WhyElys")}</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {why.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Image src={item.icon} alt={item.name} width={200} height={200} />

              <h2 className="text-2xl font-bold mt-4">{t(item.name)}</h2>
              <p className="text-lg text-center mt-2">{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyElys;
