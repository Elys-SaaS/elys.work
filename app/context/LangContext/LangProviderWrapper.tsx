"use client";
import { ReactNode } from "react";
import { LangProvider } from "./LangContext";

export default function LangProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <LangProvider>{children}</LangProvider>;
}
