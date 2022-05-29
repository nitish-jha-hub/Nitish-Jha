import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex text-center flex-col min-h-full items-center justify-center md:mt-28'>
      <div className='w-3/4'>
        <div className='text-2xl font-bold h-auto'>Looking for a Web Designer and Developer!</div>
        <div className='mt-10 my-5'>
          <span className='text-5xl md:text-6xl text-slate-200 font-bold bg-orange-600 p-1 px-2 rounded-l-xl'>NITISH</span>
          <span className='text-5xl md:text-6xl font-bold p-1 px-2 bg-slate-300 rounded-r-xl'>JHA</span></div>
        <div className='text-2xl font-serif mt-10'>Provide the best website design and development solutions in terms of innovation, time, cost, and technology. Achieve client’s maximum satisfaction.</div>

        <div className='mt-8'>
          <a href="https://github.com/nitish-jha-hub" target={'_blank'} rel="noreferrer" ><button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center text-lg mr-2 mb-2">Github</button></a>
          <a href={'https://www.linkedin.com/in/nitishjha1/'} target='_blank' rel="noreferrer" ><button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Linkedin</button></a>
          <a href="/nitish-resume.pdf" download="Nitish Resume"><button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Resume</button></a>
        </div>
      </div>
    </div>
  )
}
