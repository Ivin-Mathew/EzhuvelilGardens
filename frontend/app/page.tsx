"use client"

import Hero from "@/sections/Hero";
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Footer from "@/sections/Footer";
import gsap from 'gsap';
import { ScrollSmoother, ScrollToPlugin, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import Gallery from "@/sections/Gallery";


export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  useGSAP(()=>{
    ScrollSmoother.create({
      smoothTouch: true,
      ease: "expo",
      speed:0.8,
      smooth:1.75,
    })
  },[])
  return (
    <div id="smooth-content">
    <div className="min-w-screen min-h-screen">
      <Hero />
      <div className='flex flex-col items-center mx-[10%] my-10 gap-20'>
        <About />
        <Gallery />
        <Contact />
      </div>
    </div>
    <Footer />
    </div>
  )
}