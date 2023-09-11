import Head from "next/head";
import React from "react";
import RollPage from "./roll-page";
import useScreenSize from "@/utils/useScreenSize";

export default function Home() {
  const screenSize = useScreenSize();
  console.log({ screenSize });
  return (
    <>
      <Head key="in-index">
        <title>AYY LMAO</title>
        <meta name="high-roller" content="A dice roller pwa." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png"></link>
        <meta name="theme-color" content="#000" />
      </Head>
      <main className="flex h-screen w-full flex-col items-center justify-center border-2 bg-white md:block">
        <RollPage />
      </main>
    </>
  );
}
