import Image from 'next/image'
import React from 'react'

const Resume = () => {
  return (
    <div className='flex justify-center'>
      <Image src={"/resume.jpg"} alt="Resume Nitish" width={707} height={600} ></Image>
    </div>
  )
}

export default Resume