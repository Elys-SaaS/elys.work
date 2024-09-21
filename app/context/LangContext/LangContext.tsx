"use client";

import { createContext, FC, useContext, useEffect, useState } from "react";
import { LangContextProps, LangContextValue } from "./LangContex.types";
import tr from "@/locale/tr";
import en from "@/locale/en";
export const LangContext = createContext<LangContextValue | null>(null);

export const LangProvider: FC<LangContextProps> = ({ children }) => {
  const [lang, setLang] = useState<"en" | "tr">("en");
  useEffect(() => {
    // if the user has a preferred language on the browser storage
    // set the language to that
    const preferredLang = localStorage.getItem("elysLang");
    if (preferredLang) {
      if (preferredLang === "en" || preferredLang === "tr")
        setLang(preferredLang as "en" | "tr");
      return;
    }
  }, []);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);
  if (context === null) {
    throw new Error("useLang must be used within a LangProvider");
  }

  const t = (key: keyof typeof tr | keyof typeof en) => {
    const lang = context.lang;
    if (lang === "tr") {
      // if key is not existing, return "NON_TR"
      if (!tr[key]) return "NON_TR";
      return tr[key];
    }

    if (!en[key]) return "NON_EN";
    return en[key];
  };

  const changeLanguage = (key: "en" | "tr") => {
    context.setLang(key);
    localStorage.setItem("elysLang", key);
  };

  return { context, t, changeLanguage };
};
