import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className='hero mt-4'>
      <div className='py-12'>
        <h1 className='text-4xl font-semibold'>Everything<br /> is yummier<br/> with <span className='text-primary'>Pizza</span></h1>
        <p className='my-4 text-gray-500 text-sm'>Round or square, thick or thin, every pizza is beautiful.</p>
        <div className="flex gap-4">
          <button className='bg-primary text-white px-8 py-2 rounded-full flex items-center text-sm'>
            Order now
            <Right />
          </button>
          <button className='flex gap-2 py-2 text-gray-400 font-semibold'>
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className=' relative'>
        <Image src={'/pizza.webp'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  )
}