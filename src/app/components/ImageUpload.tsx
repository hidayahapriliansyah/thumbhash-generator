'use client'

import { ImageUp, Plus } from 'lucide-react'
import React, { useRef, useEffect } from 'react'
import { useDataHashUrlSize, useHashDataURL, useHashURLImageSize, useImageData, useMaximumGeneratedPixelLength, useOriginalImageSize, useThumbhashString } from '../store/hash'
import createThumbhashSize from '../../libs/create-thumbhash-size'
import { rgbaToThumbHash, thumbHashToDataURL } from '../../libs/thumbhash'
import ImageNext from 'next/image'
import getDataUrlSize from '../../libs/get-data-url-size'

const ImageUpload = () => {
  const inputImagRef = useRef<HTMLInputElement>(null);
  const { imageData, setImageData } = useImageData();
  const { setHashString } = useThumbhashString();
  const { setHashDataURL } = useHashDataURL();
  const { length: maxPixelLength } = useMaximumGeneratedPixelLength();
  const { size: originalImgSize, setSize: setOriginalImgSize } = useOriginalImageSize()
  const { size: hashImgsize, setSize: setHashImgSize } = useHashURLImageSize()
  const { setSize: setDataHashUrlSize } = useDataHashUrlSize();

  const generateThumbhash = (src: string) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setOriginalImgSize({ w: img.width, h: img.height });
      const maxPixel = maxPixelLength;
      const { width, height } = createThumbhashSize(maxPixel, img.width, img.height);
      setHashImgSize({ w: width, h: height });

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(img, 0, 0, width, height);
        const imageData = context.getImageData(0, 0, width, height);
        const hash = rgbaToThumbHash(width, height, imageData.data);

        const thumbHashString = btoa(String.fromCharCode(...new Uint8Array(hash)));
        const thumbHashImageDataUrl = thumbHashToDataURL(hash, maxPixel);

        setHashString(thumbHashString);
        setHashDataURL(thumbHashImageDataUrl);
        const hashUrlSize = getDataUrlSize(thumbHashImageDataUrl);
        setDataHashUrlSize(hashUrlSize);
      }
    };
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImageData(result);
        generateThumbhash(result);  // Panggil fungsi generate hash ketika gambar di-upload
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputClick = () => {
    if (inputImagRef.current) {
      inputImagRef.current.click();
    }
  };

  useEffect(() => {
    if (imageData) {
      generateThumbhash(imageData);  // Regenerasi thumbhash ketika imageData atau maxPixelLength berubah
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageData, maxPixelLength]);  // Tambahkan imageData dan maxPixelLength ke dalam array dependensi

  return (
    <div className='flex flex-col items-center mb-4 p-4 w-full h-[360px] border border-primary'>
      <h2 className='mb-4 text-center text-2xl font-extrabold bg-custom-gradient text-transparent bg-clip-text'>Original Image</h2>
      <div>Size: {originalImgSize.w}x{originalImgSize.h}</div>
      {
        !imageData && (
          <div
            onClick={handleInputClick}
            className='flex justify-center items-center mb-4 mx-auto w-[260px] aspect-square border border-dashed border-primary hover:bg-secondary/20 hover:cursor-pointer'
          >
            <Plus className='w-16 h-16' strokeWidth='1' />
          </div>
        )
      }
      {
        imageData && (
          <div
            className='relative flex justify-center items-center mb-4 mx-auto w-[260px] aspect-square border border-dashed border-primary hover:bg-secondary/20 group'
          >
            <ImageNext
              src={imageData}
              alt='Original Image'
              fill
              className='object-contain'
            />
            <button
              onClick={handleInputClick}
              className='absolute bottom-2 right-2 z-10 hidden group-hover:block p-2 bg-custom-gradient'
            >
              <ImageUp />
            </button>
          </div>
        )
      }

      <input
        type="file"
        accept="image/*"
        ref={inputImagRef}
        onChange={handleImageUpload}
        className="hidden mb-4"
      />
    </div>
  )
}

export default ImageUpload
