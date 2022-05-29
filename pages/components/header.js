import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="z-40 bg-slate-100 sticky top-0 text-gray-600 font-semibold shadow-xl p-2">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src={'/nitish_logo.png'} width={'50'} height={'50'} alt='Nitish Image' ></Image>
          <span className="ml-3 text-xl">Nitish Jha</span>
        </a></Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/about'}><a className="mr-5 hover:rounded-lg hover:text-gray-900 hover:bg-slate-200 p-2">ABOUT ME</a></Link>
          <Link href={'/resume'}><a className="mr-5 hover:rounded-lg hover:text-gray-900 hover:bg-slate-200 p-2">RESUME</a></Link>
          <Link href={'/my-work'}><a className="mr-5 hover:rounded-lg hover:text-gray-900 hover:bg-slate-200 p-2">MY WORK</a></Link>
          <Link href={'/contact'}><a className="mr-5 hover:rounded-lg hover:text-gray-900 hover:bg-slate-200 p-2">CONTACT ME</a></Link>
        </nav>
      </div>
    </header>
  )
}

export default Header