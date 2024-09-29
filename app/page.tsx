"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LandingSteps from "@/components/landingsteps";
import WhatWeAreDoing from "@/components/what-we-are-doing";
import WhyElys from "@/components/WhyElys";
export default function Home() {
  return (
    <div className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.03] before:z-[100] before:pointer-events-none  before:bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/noise_yvdidf.gif')]">
      <Header />
      <Hero />
      <WhyElys />
      <WhatWeAreDoing />
      <LandingSteps />
      <Footer />
    </div>
  );
}
