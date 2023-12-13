import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
      <section className=''>
        <div className='absolute left-0 right-0 w-full justify-start'>
          <div className='h-64 w-64 absolute left-14 -top-24 rotate-45 -z-10'>
            <Image src={'/salad.avif'} layout={'fill'} objectFit={'contain'} alt={'salad'} />
          </div>
          <div className='h-64 w-64 absolute right-14 -top-24 -rotate-45 -z-10'>
            <Image src={'/salad.avif'} layout={'fill'} objectFit={'contain'} alt={'salad'} />
          </div>
        </div>
    
        <SectionHeaders subHeader={'Check out our'} mainHeader={'Menu'} />

        <div className='grid grid-cols-3 gap-4'>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </section>
    )
}