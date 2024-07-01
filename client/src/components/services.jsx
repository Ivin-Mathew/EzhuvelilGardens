import React from 'react'
import icon from "../assets/image.png"

const content=[
    {
        title:"Landscaping", 
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex tincidunt, scelerisque velit eu, tincidunt neque. Sed ultricies dolor non elit ultrices interdum."
    },
    {
        title:"Garden Layouts", 
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex tincidunt, scelerisque velit eu, tincidunt neque. Sed ultricies dolor non elit ultrices interdum."
    },
    {
        title:"Green Houses", 
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex tincidunt, scelerisque velit eu, tincidunt neque. Sed ultricies dolor non elit ultrices interdum."
    },
    {
        title:"Decorative plants", 
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex tincidunt, scelerisque velit eu, tincidunt neque. Sed ultricies dolor non elit ultrices interdum."
    },
    {
        title:"Fruit plants", 
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex tincidunt, scelerisque velit eu, tincidunt neque. Sed ultricies dolor non elit ultrices interdum."
    },
    {
        title:"Medicinal plants", 
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ex tincidunt, scelerisque velit eu, tincidunt neque. Sed ultricies dolor non elit ultrices interdum."
    },
    
];

const Services = () => {
  return (
    <>
    <div className="flex flex-col p-20">
        <p className='text-3xl font-medium'>What we offer</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 p-5'>
            {content.map((item,i)=>(
                <div key={i} className='mx-10 mb-6 pb-3 shadow-sm flex flex-row'>
                    <img src={icon} className='h-8 mt-2'/>
                    <div>
                        <p className="text-xl font-semibold p-2">{item.title}</p>
                        <p className='px-4'>{item.desc}</p>
                    </div>
                    
                </div>
            )
        )}
        </div>
    </div>
    </>
  )
}

export default Services