"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/app/utils";
import ButtonPrimary from "./button-primary";
import { Separator } from "./ui/separator";
import { useLang } from "@/app/context/LangContext/LangContext";

const pps = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

const featureItem =
  "hover:bg-gray-300 p-2 rounded-md hover:text-[#333] cursor-pointer font-semibold transition duration-300";

const langaugeSelection = "hover:underline underline-offset-2";

export default function Header() {
  const { t, changeLanguage } = useLang();

  return (
    <header
      className={cn(
        "w-screen border-b pt-1 pb-2 border-gray-500",
        pps.className
      )}
    >
      <main className="mx-auto max-w-[95rem] w-full flex justify-between items-center">
        <div>
          <Image
            src="/static/elys-logo-white.png"
            alt="logo"
            width={140}
            height={140}
          />
        </div>
        <div className="flex space-x-4 items-center text-xl text-gray-300 ">
          <div className={featureItem}>{t("About")}</div>
          <div className={featureItem}>{t("Contact")}</div>
          <div className={featureItem}>{t("Projects")}</div>
          <div className={featureItem}>{t("Blog")}</div>
        </div>
        <div className="flex items-center justify-center space-x-6">
          <div className="flex space-x-2 text-lg h-4 items-center">
            <button
              onClick={() => {
                changeLanguage("tr");
              }}
              className={langaugeSelection}
            >
              TR
            </button>
            <Separator orientation="vertical" color="white" />
            <button
              onClick={() => {
                changeLanguage("en");
              }}
              className={langaugeSelection}
            >
              EN
            </button>
          </div>
          {/* TODO: make it work */}
          <ButtonPrimary textContent={t("BookAMeeting")} onClick={() => {}} />
        </div>
      </main>
    </header>
  );
}
