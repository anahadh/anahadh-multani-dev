'use client'
import React from 'react'
import clsx from 'clsx';
import { themes } from '../contexts/themes';
import { useTheme } from '../contexts/ThemeContext'


export const MainCTAButton = () => {
    const { colorTheme } = useTheme();

    return (
        <div className={`flex px-10 py-5 mt-4 rounded-xl text-white font-bold font-arvo text-2xl transition-all duration-300 gap-2 items-center cursor-pointer bg-gradient-to-r ${themes[colorTheme].background} ${themes[colorTheme].hoverBackground}`}>
            See My Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </div>
    )
}

export default MainCTAButton