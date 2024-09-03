'use client'

import { FileImage } from 'lucide-react'
import React from 'react'
import { useHashDataURL, useHashURLImageSize, useThumbhashString } from '../store/hash';
import ImageNext from 'next/image'

const HashURLImageResult = () => {
  const { hashString, setHashString } = useThumbhashString();
  const { hashDataURL, setHashDataURL } = useHashDataURL();
  const { size } = useHashURLImageSize()

  return (
    <div className='flex flex-col items-center mb-4 p-4 w-full h-[360px] border border-primary'>
      <h2 className='mb-4 text-center text-2xl font-extrabold bg-custom-gradient text-transparent bg-clip-text'>Generated Image</h2>
      <div>Size: {size.w}x{size.h}</div>
      {
        !hashDataURL && <div className='flex justify-center items-center mb-4 mx-auto w-[260px] aspect-square border border-primary border-dashed'>
          <FileImage className='w-16 h-16' strokeWidth='1' />
        </div>
      }
      {
        hashDataURL && <div
          className='relative flex justify-center items-center mb-4 mx-auto w-[260px] aspect-square border border-dashed border-primary'
        >
          <ImageNext
            src={hashDataURL}
            alt='Original Image'
            fill
            className='object-contain'
          />
        </div>
      }
    </div>
  )
}

export default HashURLImageResult