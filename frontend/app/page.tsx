import './globals.css';
import Hero from "@/components/Hero";
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen">
      <Hero />
      <div className='flex flex-col items-center mx-[10%] my-10 gap-20'>
        <About />
        <Contact />
      </div>
    </div>
  )
}