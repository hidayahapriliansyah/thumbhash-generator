'use client'

import { Clipboard, Check } from 'lucide-react';
import React, { useState } from 'react';
import { useDataHashUrlSize, useHashDataURL, useThumbhashString } from '../store/hash';

const HashStringResult = () => {
  const { hashDataURL } = useHashDataURL();
  const { hashString } = useThumbhashString();
  const { size } = useDataHashUrlSize();

  const [isCopiedHash, setIsCopiedHash] = useState(false);
  const [isCopiedDataURL, setIsCopiedDataURL] = useState(false);

  const handleCopy = (text: string, setIsCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className='w-full'>
      <div className='w-full mb-2'>
        <label className='text-sm text-secondary'>Thumbhash string</label>
        <div className='relative w-full'>
          <div className='pl-2 w-full h-12 border border-primary overflow-x-scroll overflow-y-hidden'>
            {!hashString && 'Empty'}
            {hashString && hashString}
          </div>
          <button
            className="absolute top-0 right-0 btn btn-sm bg-custom-gradient"
            onClick={() => handleCopy(hashString || '', setIsCopiedHash)}
          >
            {isCopiedHash ? <Check className='w-4 h-4' /> : <Clipboard className='w-4 h-4' />}
          </button>
        </div>
      </div>

      <div className='w-full'>
        <label className='text-sm text-secondary'>Data URL string</label>
        <div className='relative w-full'>
          <div className='pl-2 w-full h-12 border border-primary overflow-x-scroll overflow-y-hidden'>
            {!hashDataURL && 'Empty'}
            {hashDataURL && hashDataURL}
          </div>
          <div className='absolute top-0 right-0 flex items-center'>
            <div className='flex justify-center items-center mr-1 p-1 w-fit bg-custom-gradient h-8'>{size} bytes</div>
            <button
              className="btn btn-sm bg-custom-gradient"
              onClick={() => handleCopy(hashDataURL || '', setIsCopiedDataURL)}
            >
              {isCopiedDataURL ? <Check className='w-4 h-4' /> : <Clipboard className='w-4 h-4' />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HashStringResult;
