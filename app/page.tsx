"use client";
import { TabContextProvider } from "@/context/tab";
import Overview from "@/pages/overview";

export default function Home() {
  return (
    <TabContextProvider>
      <Overview />
    </TabContextProvider>
  );
}
