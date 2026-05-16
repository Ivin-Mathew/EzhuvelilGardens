"use client"

import './globals.css';

import Hero from "@/sections/Hero";
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Footer from "@/sections/Footer";
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';


export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useGSAP(()=>{
    ScrollSmoother.create({
      smoothTouch: true,
      ease: "expo"
    })
  },[])
  return (
    <div id="smooth-content">
    <div className="min-w-screen min-h-screen">
      <Hero />
      <div className='flex flex-col items-center mx-[10%] my-10 gap-20'>
        <About />
        <Contact />
      </div>
    </div>
    <Footer />
    </div>
  )
}