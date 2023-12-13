import Hero from '@/components/layout/Hero'
import Header from '../components/layout/Header'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeaders from '@/components/layout/SectionHeaders'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeaders 
          subHeader={'our story'}
          mainHeader={'about us'}
        />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          </p>
          <p>
          blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
          </p>
          <p>
            blah blah blah blah blah blah blah blah blah blah blah blah
          </p>
        </div>
        
      </section>
      <section className='text-center my-8'>
        <SectionHeaders 
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us!'}
        />
        <div className='mt-8'>
          <a className='text-4xl underline text-gray-500' href='tel:+23423423422'>
            +23 423 423 422
          </a>
        </div>
        
      </section>
    </>
  )
}
