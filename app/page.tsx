import React from 'react';
import { WordChanger } from './WordChanger';
import { MainCTAButton } from './MainCTAButton';

export default function Home() {
  return (
    <div className='flex flex-row w-screen'>
      <div className='flex flex-col items-end p-10 ml-auto w-1/2'>
        <h1 className='text-5xl font-bold mt-40 w-1/2 text-right'>I'm Anahadh Multani, and I make...</h1>
        <WordChanger styles={`bg-gradient-to-r from-purple-500 to-pink-500`} />
        <MainCTAButton />
      </div>
      <div className="flex justify-center items-center w-1/2 mx-auto">
        <p className='text-5xl'>Image Placeholder</p>
      </div>
    </div>
  );
}
