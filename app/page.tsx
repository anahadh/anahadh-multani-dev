import React from 'react';
import { WordChanger } from '../components/WordChanger';
import { ProjectsNavButton } from '../components/ProjectsNavButton';
import { ContactNavButton } from '../components/ContactNavButton';
import { PhotoSlideshow } from '../components/PhotoSlideshow';
import { TitleComponent } from '@/components/TitleComponent';
import { StackToolComponent } from '@/components/StackToolComponent';

type Stack = {
  [key: string]: {
    [key: string]: StackItem;
  }
}

type StackItem = {
  icon: string;
}

const stack: Stack = {
    'Frontend': {
      'HTML': {
        'icon': "icons/html.webp"
      },
      'TailwindCSS': {
        'icon': "icons/tailwind.png"
      },
      'TypeScript': {
        'icon': "icons/typescript.png"
      },
      'React': {
        'icon': "icons/react.png"
      },
      'Next.js': {
        'icon': "icons/nextjs.png"
      }
    },
    "Backend": {
      'Node.js': {
        'icon': "icons/nodejs.png"
      },
      'Express.js': {
        'icon': "icons/expressjs.webp"
      },
      'MongoDB': {
        'icon': "icons/mongodb.png"
      },
      'Firebase': {
        'icon': "icons/firebase.png"
      }
    },
    "Other": {
      'Python': {
        'icon': "icons/python.png"
      },
      'Java': {
        'icon': "icons/java.png"
      },
      'C++': {
        'icon': "icons/cpp.png"
      },
    }
}

export default function Home() {
    return (
      <>
        <div className='flex flex-row w-screen h-[90vh] pt-[160px] border-b-8' id="#home">
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
            <TitleComponent title='Who Am I?' size={7} style='gradient' margin={10} />
            <p className="text-3xl leading-relaxed text-justify font-notoSans font-medium max-w-3xl">
              My name is Anahadh Multani, and I'm a senior in high school from Redmond, Washington. During the pandemic, I started to build very simple websites using HTML and CSS. In high school, I started learning how to build websites more seriously, and since then, I've put an emphasis on learning new skills with every website that I build and building for NGOs and small businesses.
              <br /><br />
              The biggest project that I've worked on is the website for Incepta, a company which provided high schoolers the opportunity to find mentors doing their dream majors at their dream colleges and connect with them. I built the website's landing page and a few other UIs for the website, and it the experience provided me a launchpad to start developing websites for others.
              <br /><br />
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-start justify-center w-1/2 mt-20 mb-10">
              <TitleComponent title={`So... What's My Stack?`} size={7} style='gradient' margin={10} />
            </div>
            <div className='grid grid-cols-6 w-1/2 gap-10'>
              {Object.entries(stack).map(([category, technologies]) => (
                <div key={category} className='col-span-2'>
                  <TitleComponent title={category} size={5} style='gradient' margin={10} />
                  <div className='grid grid-cols-2 gap-10 mt-6'>
                    {Object.entries(technologies).map(([tech, data]) => (
                      <StackToolComponent 
                        key={tech}
                        name={tech}
                        icon={data.icon}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}