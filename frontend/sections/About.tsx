import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='grid grid-cols-2 w-full gap-x-20 gap-y-40 my-20'>
            <div className='flex items-center'>
                Nestled in the lush, verdant landscapes of Kottayam, Ezhuvelil Gardens began with a simple passion: to share the joy and tranquility of nature with our community. Over the years, we have grown from a modest backyard passion project into a premier plant nursery, trusted by local gardening enthusiasts and landscape designers alike. We pride ourselves on cultivating a diverse and thriving collection of plants that are perfectly adapted to our unique tropical climate.
            </div>
            <div className='grid grid-cols-2 grid-rows-2 bg-black w-full h-120 text-white group'>
                <Image src="https://placehold.co/200x150.png" alt="About image 1" width={100} height={100} className='bg-teal-200 w-full h-full border-2 border-black duration-200  group-hover:-translate-x-6 group-hover:-translate-y-3' />
                <Image src="https://placehold.co/200x150.png" alt="About image 2" width={100} height={100} className='bg-teal-200 w-full h-full border-2 border-black duration-200 delay-75 group-hover:translate-x-5 group-hover:-translate-y-6' />
                <Image src="https://placehold.co/200x150.png" alt="About image 3" width={100} height={100} className='bg-teal-200 w-full h-full border-2 border-black duration-200 delay-100 group-hover:-translate-x-8 group-hover:translate-y-4' />
                <Image src="https://placehold.co/200x150.png" alt="About image 4" width={100} height={100} className='bg-teal-200 w-full h-full border-2 border-black duration-200 delay-200 group-hover:translate-x-7 group-hover:translate-y-10' />
            </div>
            <div className='grid grid-cols-2 grid-rows-2 bg-black w-full h-120 text-white group'>
                <Image src="https://placehold.co/200x150.png" alt="About image 1" width={100} height={100} className='bg-teal-200 w-full h-full border-2 border-black duration-200  group-hover:-translate-x-6 group-hover:-translate-y-3' />
                <Image src="https://placehold.co/200x150.png" alt="About image 2" width={100} height={100} className='bg-teal-200 w-full h-full border-2 border-black duration-200 delay-75 group-hover:translate-x-5 group-hover:-translate-y-6' />
                <Image src="https://placehold.co/200x150.png" alt="About image 3" width={100} height={100} className='bg-teal-200 w-full h-full border-2 border-black duration-200 delay-100 group-hover:-translate-x-8 group-hover:translate-y-4' />
                <Image src="https://placehold.co/200x150.png" alt="About image 4" width={100} height={100} className='bg-teal-200 w-full h-full border-2 border-black duration-200 delay-200 group-hover:translate-x-7 group-hover:translate-y-10' />
            </div>
            <div className='flex items-center'>
                At Ezhuvelil Gardens, we believe that every space - whether a sprawling backyard, a cozy balcony, or a modern office - deserves a touch of green. Our curated selection ranges from vibrant flowering ornamentals and exotic indoor houseplants to hardy fruit trees and organic vegetable saplings. Every single plant in our nursery is nurtured with expert care, ensuring that you take home healthy, resilient greens that are ready to flourish.
            </div>
        </div>
    )
}

export default About