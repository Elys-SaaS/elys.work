import React from "react";

import { cn } from "@/app/utils";
import { pps } from "@/lib/fonts";
import { useLang } from "@/app/context/LangContext/LangContext";

/**
 *
 *
 * it is really easy with Elys
 * explain your problem,
 * let us contact you
 * and we will solve it
 * Done. Thats it
 * */
function LandingSteps() {
  const { t } = useLang();
  return (
    <div className={cn("max-w-7xl mx-auto", pps.className)}>
      <hr className="border-b-2 border-gray-300 w-20 mx-auto my-12" />
      <div className="text-center">
        <h1 className="text-4xl font-bold">{t("How to land?")}</h1>
      </div>
      <div className="text-center lg:text-left text-3xl font-bold mt-12">
        <h1>{t("With Elys it is sooo easy.")}</h1>
      </div>

      {/** Create a nice looking roadmap like component with steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 shining-text">
        <div className="flex flex-col items-center justify-center ">
          <div className="text-2xl font-bold">{t("Step 1")}</div>
          <div className="text-lg font-semibold">
            {t("Explain your problem")}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="text-2xl font-bold">{t("Step 2")}</div>
          <div className="text-lg font-semibold">{t("Let us contact you")}</div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="text-2xl font-bold">{t("Step 3")}</div>
          <div className="text-lg font-semibold">
            {t("And let us solve it ASAP.")}
          </div>
        </div>
      </div>

      <div className="text-3xl font-bold mt-12 text-center lg:text-left">
        <h1>{t("Done. That's it.")}</h1>
        <h1>{t("It is that easy.")}</h1>
      </div>
    </div>
  );
}

export default LandingSteps;
