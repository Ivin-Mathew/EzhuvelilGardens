import './globals.css';
import Hero from "@/components/Hero";
import About from '@/components/About';

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen">
      <Hero />
      <div className='flex items-center mx-[10%] my-10'>
        <About />
      </div>
    </div>
  )
}