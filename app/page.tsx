"use client";
import { ContextProvider } from "@/context";
import Overview from "@/pages/overview";

export default function Home() {
  return (
    <ContextProvider>
      <Overview />
    </ContextProvider>
  );
}
