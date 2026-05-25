import Image from "next/image";

const Gallery = () => {
    const imgs = [1, 2, 3, 4, 5, 6, 7, 8];


    return (
        <div id="gallery" className='flex flex-col items-center justify-center w-full'>
            <p className='text-7xl font-serif'>GALLERY</p>
            <div className="grid grid-cols-5 grid-rows-3 mt-8 gap-4 w-full h-180">
                <Image src="https://placehold.co/500.png" alt="Gallery image 1" width={100} height={100} className="w-full h-full" />
                <Image src="https://placehold.co/1000x500.png" alt="Gallery image 1" width={100} height={100} className="bg-black w-full h-full col-start-2 col-span-2" />
                <Image src="https://placehold.co/1000.png" alt="Gallery image 1" width={100} height={100} className="bg-black w-full h-full col-start-4 col-span-2 row-span-2 " />
                <Image src="https://placehold.co/500x1000.png" alt="Gallery image 1" width={100} height={100} className="bg-black w-full h-full col-start-1 row-span-2" />
                <Image src="https://placehold.co/500.png" alt="Gallery image 1" width={100} height={100} className="bg-black w-full h-full col-start-2 col-span-2 row-span-2 " />
                <Image src="https://placehold.co/500.png" alt="Gallery image 1" width={100} height={100} className="w-full h-full" />
                <Image src="https://placehold.co/500.png" alt="Gallery image 1" width={100} height={100} className="w-full h-full" />
            </div>
        </div>
    )
}

export default Gallery