import Image from "next/image";

export default function RegisterPage() {
  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl'>Register</h1>
      <form className='block max-w-sm mx-auto'>
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <button type='submit'>Register</button>
        <div className='my-4 text-center text-gray-500'>or login with provider</div>
        <button className='flex items-center justify-center gap-4'>
          <Image src={'/google.png'} alt='google' width={32} height={32}/>
          Login with google
        </button>
      </form>
    </section>
  )
}