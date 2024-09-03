'use client'

import { Info } from 'lucide-react';
import React, { useEffect } from 'react';

const Modal = () => {
  useEffect(() => {
  }, []);

  const openModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
    modal?.close();
  };

  return (
    <>
      {/* Button to open the modal */}
      <button className="btn" onClick={openModal}>
        <Info />
      </button>

      {/* Modal element */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div>
            <h3 className="font-bold text-lg">About this project</h3>
            <p className="py-4">
              Thumbhash is a method for generating a blurred image placeholder. It was created by Evan Wallace and is available on GitHub
              (<a href="https://github.com/evanw/thumbhash" className="text-primary" target="_blank" rel="noopener noreferrer">Thumbhash Repository</a>).
              This project implements a Thumbhash generator that allows users to customize the maximum pixel length generated.
              By doing this, it is possible to create placeholder images with very small sizes, tailored to the user&apos;s preferences.
            </p>

            <span>Made with Next.js, Tailwind & DaisyUI by Adi Muhamad Firmansyah</span>
            <p>Checkout my portfolio <a href="https://adimf.vercel.app" target="_blank" className='text-primary'>here</a></p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
