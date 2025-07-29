'use client'
import React from 'react'
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/contexts/themes';
import * as Tooltip from '@radix-ui/react-tooltip';

type StackToolComponentProps = {
    name: string;
    icon: string;
}

export const StackToolComponent: React.FC<StackToolComponentProps> = (props) => {
    const { name, icon } = props;
    const { colorTheme } = useTheme();
        
    const theme = themes[colorTheme];

    return (
        <Tooltip.Provider delayDuration={0}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <div className={`flex relative group aspect-square bg-gradient-to-r ${theme.background} justify-center items-center rounded-lg transition-all duration-300`}>
                        <Image src={`/${icon}`} alt={name} width={80} height={80} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover z-10 transition-transform duration-300 group-hover:scale-[1.03]' />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white aspect-square h-[85%] rounded-lg transition-transform duration-300 group-hover:scale-[1.03] z-0' />
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content side='bottom' className='bg-black rounded-lg shadow-xl px-5 py-4 animate-fadeIn'>
                        <div className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.background} text-2xl font-bold font-notoSans tracking-wider`}>
                            {name}
                        </div>
                        <Tooltip.Arrow className='fill-black' />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}