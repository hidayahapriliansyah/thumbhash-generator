'use client'

import React from 'react'
import { useMaximumGeneratedPixelLength } from '../store/hash'

const MaxGeneratedPixelLength = () => {
  const { length, setLength } = useMaximumGeneratedPixelLength();

  return (
    <div className='w-full'>
      <label htmlFor="max-pixel" className='text-sm text-secondary'>Max. generated pixel length</label>
      <input
        id="max-pixel"
        type="number"
        onChange={(e) => {
          try {
            const numValue = Number(e.target.value);
            if (numValue < 2 || numValue >= 100) {
              alert('Nilai salah')
            }
            setLength(Number(e.target.value))
          } catch (error) {
            alert('Nilai salah')
          }
        }}
        value={length}
        placeholder="Maximum pixel length"
        min={2}
        max={100}
        className="mx-auto input input-primary w-full"
      />
    </div>
  )
}

export default MaxGeneratedPixelLength