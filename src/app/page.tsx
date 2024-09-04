import { Clipboard, FileImage, Plus } from 'lucide-react';
import Image from "next/image";
import Modal from './components/modal';
import ImageUpload from './components/ImageUpload';
import HashURLImageResult from './components/HashURLImageResult';
import HashStringResult from './components/HashStringResult';
import MaxGeneratedPixelLength from './components/MaxGeneratedPixelLength';

export default function Home() {
  return (
    <main className='relative w-full max-w-7xl mx-auto p-8'>
      <header className='relative w-full sm:w-fit mx-auto'>
        <h1 className='text-center font-black text-2xl md:text-4xl bg-custom-gradient bg-clip-text text-transparent'>
          Thumbhash Generator
        </h1>
        <div className='absolute -bottom-10 sm:top-0 -right-10 sm:-right-20'>
          <Modal />
        </div>
      </header>
      <p className='block mx-auto mb-8 w-fit text-center'>Effortless Tiny Image Placeholders</p>
      <section className='flex flex-col md:flex-row gap-4 w-full'>
        <div className='mx-auto w-full md:max-w-[50%]'>
          <ImageUpload />
          <MaxGeneratedPixelLength />
        </div>
        <div className='mx-auto w-full md:max-w-[50%]'>
          <HashURLImageResult />
          <HashStringResult />
        </div>
      </section>
    </main>
  );
}
