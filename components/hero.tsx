import { useLang } from "@/app/context/LangContext/LangContext";
import { cn } from "@/app/utils";
import React from "react";
import ButtonPrimary from "./button-primary";
import Image from "next/image";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import FillTheFormCard from "./HeroOptions";
import { pps } from "@/lib/fonts";

function Hero() {
  const { t } = useLang();

  const fp = t("HeroFP") + " ";
  const sp = t("HeroSP") + " ";
  const we = t("WithElys") + " ";

  return (
    <div className={cn(" mt-12", pps.className)}>
      <div className="mx-auto w-[49rem] text-center flex items-center justify-center flex-col">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", scale: 1.5 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{
            duration: 0.45,
            delay: 2 / 3,
          }}
        >
          <Image
            src="/static/elys-logo-white.png"
            alt="logo"
            width={400}
            height={400}
          />
        </motion.div>

        <h1 className={"text-5xl font-bold leading-[1.6] mb-5"}>
          {fp.split("").map((char, index) => (
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.25,
                delay: index / 30,
              }}
              key={index}
            >
              {char}
            </motion.span>
          ))}
          <span className="bg-gradient-to-t sm:w-ful w-4/5 from-[#a2b6fa] to-[#334cec] bg-clip-text text-transparent">
            {we.split("").map((char, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index / 10,
                }}
                key={index}
              >
                {char}
              </motion.span>
            ))}
          </span>{" "}
          {sp.split("").map((char, index) => (
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.25,
                delay: index / 10,
              }}
              key={index}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <ButtonPrimary
              textContent={t("FillTheForm")}
              onClick={() => {}}
              className="font-bold "
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] opacity-100 bg-gray-200">
            <DialogHeader>
              <DialogTitle className="text-black">
                {t("SelectAnOption")}
              </DialogTitle>
              <DialogDescription>{t("SelectThatFitsYou")}</DialogDescription>
            </DialogHeader>
            <div className="flex space-x-4 mx-auto">
              <FillTheFormCard
                onClick={() => {}}
                title={t("FillTheFormBasic") + " " + `(${t("Suggested")})`}
                main={t("FillTheFormSuggestion")}
                description={t("FormReason")}
                image="https://res.cloudinary.com/dzl9yxixg/image/upload/simplechartt_sidydt_6468b0.png"
                hoverImage="https://res.cloudinary.com/dzl9yxixg/image/upload/chartt_ulxwcj_9939d9.png"
              />
              <FillTheFormCard
                onClick={() => {}}
                title={t("BookAMeeting")}
                main={t("BookAMeetingSuggestion")}
                description={t("BookAMeetingReason")}
                image="https://res.cloudinary.com/dzl9yxixg/image/upload/chat_zinhdw.png"
                hoverImage="https://res.cloudinary.com/dzl9yxixg/image/upload/chat_zinhdw.png"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Hero;
