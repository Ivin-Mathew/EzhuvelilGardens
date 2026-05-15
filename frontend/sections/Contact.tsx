import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col items-center text-center h-screen mt-20'>
            <p className='font-serif text-[60px]'>CONTACT US</p>
            <p className='font-bold text-[90px] -tracking-[5px]'>HOW CAN WE HELP YOU?</p>
            <div className='flex flex-col justify-center items-center h-full gap-24 -mt-20'>
                <div className='flex flex-col'>
                    <p className='text-[24px] font-light'>EMAIL</p>
                    <a href="mailTo:email@email.com" className='text-[48px] leading-10'>EMAIL@EMAIL.COM</a>
                </div>
                <div className='flex flex-col'>
                    <p className='text-[24px] font-light'>PHONE</p>
                    <a href="tel:+911234567890" className='text-[48px] leading-10' >+91 123 456 7890</a>
                </div>
            </div>
        </div>
    )
}

export default Contact