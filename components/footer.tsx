"use client";
import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { cn } from "@/app/utils";
import { pps } from "@/lib/fonts";
import { useLang } from "@/app/context/LangContext/LangContext";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { t } = useLang();
  return (
    <>
      <div
        className={cn("relative h-full sm:pt-14 pt-8  ", pps.className)}
        ref={container}
      >
        <div className="sm:container  px-4 mx-auto">
          <div className="border-y-2 md:py-4 border-gray-200 px-20">
            <motion.div
              ref={ref}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div
                className="
                 text-2xl lg:text-[4rem] font-semibold  text-center
              "
              >
                ELYS - {t("Let's Build Your Next SaaS Together")}
              </div>
            </motion.div>
          </div>
          <Link href="/credits">Credits</Link>
          <div className="flex  justify-between py-2">
            <span className="font-medium">
              &copy; 2024 Elys. All Rights Reserved.
            </span>
            <a href="#" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
