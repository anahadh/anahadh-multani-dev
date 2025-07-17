import React from 'react';
import { WordChanger } from '../components/WordChanger';
import { ProjectsNavButton } from '../components/ProjectsNavButton';
import { ContactNavButton } from '../components/ContactNavButton';
import { PhotoSlideshow } from '../components/PhotoSlideshow';
import { AboutMeTitle } from '@/components/AboutMeTitle';

export default function Home() {
  return (
    <>
      <div className='flex flex-row w-screen h-[80vh] pt-[160px] border-b-8' id="#home">
        <div className='flex flex-col items-end justify-center p-10 ml-auto w-1/2'>
          <h1 className='text-5xl font-bold w-7/12 text-right font-arvo'>I'm Anahadh Multani, and I develop...</h1>
          <WordChanger styles={`bg-gradient-to-r`} />
          <h1 className='text-5xl font-bold mt-4 w-7/12 text-right font-arvo'>websites</h1>
          <div className="flex gap-10 items-end mt-10">
            <ProjectsNavButton />
            <ContactNavButton />
          </div>
        </div>
        <PhotoSlideshow />
      </div>
      <div className="w-screen bg-white" id="#about">
        <div className="flex flex-col items-center justify-center pt-20 pb-10">
          <AboutMeTitle />
          <p className="text-3xl leading-relaxed text-justify font-notoSans font-semibold max-w-2xl">
            My name is Anahadh Multani, and I'm a senior in high school with a heavy passion for web development. 
          </p>
        </div>
      </div>
    </>
  );
}