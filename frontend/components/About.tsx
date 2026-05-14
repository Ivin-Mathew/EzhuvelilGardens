import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-2 w-full gap-x-20 gap-y-40'>
        <div>
            Content 1
        </div>
        <div className='bg-black w-full h-120 text-white'>
            Image 1
        </div>
        <div className='bg-black w-full h-120 text-white'>
            Image 2
        </div>
        <div>
            Content 2
        </div>
    </div>
  )
}

export default About