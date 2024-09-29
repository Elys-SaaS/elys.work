"use client";
import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { cn } from "@/app/utils";
import { pps } from "@/lib/fonts";

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

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
                text-[4rem] font-semibold 
              "
              >
                ELYS - Let&apos;s Build Your Next SaaS Together
              </div>
            </motion.div>
          </div>
          <div className="md:flex justify-between w-full">
            <div className="flex justify-center items-center">
              <h1 className="md:text-4xl text-2xl font-semibold">
                Let&lsquo;s do a great work together
              </h1>
            </div>
            <div className="flex gap-10">
              <ul>
                <li className="text-xl font-medium">
                  <Link href="/credits">Credits</Link>
                </li>
              </ul>
              <ul>
                <li className="text-2xl pb-2 font-semibold">SOCIAL</li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.linkedin.com/company/next-codez/"
                    target="_blank"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://twitter.com/NextCodez"
                    target="_blank"
                    className="underline"
                  >
                    Twitter
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.instagram.com/nextcodez/"
                    target="_blank"
                    className="underline"
                  >
                    Instagram
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a
                    href="https://www.facebook.com/nextcodezz"
                    target="_blank"
                    className="underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
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
