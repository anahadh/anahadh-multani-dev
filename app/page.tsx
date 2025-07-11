import React from 'react';
import { WordChanger } from '../components/WordChanger';
import { ProjectsNavButton } from '../components/ProjectsNavButton';
import { ContactNavButton } from '../components/ContactNavButton';
import { PhotoSlideshow } from '../components/PhotoSlideshow';

export default function Home() {
  return (
    <div className='flex flex-row w-screen'>
      <div className='flex flex-col items-end p-10 ml-auto w-1/2'>
        <h1 className='text-5xl font-bold mt-40 w-7/12 text-right font-arvo'>I'm Anahadh Multani, and I make...</h1>
        <WordChanger styles={`bg-gradient-to-r`} />
        <div className="flex gap-5 items-end mt-4">
          <ProjectsNavButton />
          <ContactNavButton />
        </div>
      </div>
      <PhotoSlideshow />
    </div>
  );
}