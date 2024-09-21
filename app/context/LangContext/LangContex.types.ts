interface LangContextValue {
  lang: "en" | "tr";
  setLang: (lang: "en" | "tr") => void;
}

interface LangContextProps {
  children: React.ReactNode;
}

export type { LangContextValue, LangContextProps };
