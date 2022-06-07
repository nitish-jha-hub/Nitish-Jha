import Image from 'next/image'
import React from 'react'

const Resume = () => {
  return (
    <div className='mt-8 flex justify-center'>
      <Image src={"/resume.png"} alt="Resume Nitish" width={600} height={500} ></Image>
    </div>
  )
}

export default Resume