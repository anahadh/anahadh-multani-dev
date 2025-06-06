import React from 'react'
import clsx from 'clsx';
import { useTheme } from './ThemeContext'


export const MainCTAButton = () => {
    const { colorTheme } = useTheme();
    const buttonStyles = clsx(
        "flex px-10 py-5 mt-4 rounded-xl text-white font-bold text-2xl transition-all duration-300 gap-2 items-center cursor-pointer",
        {
            'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600': colorTheme === 'dreamscape',
            'bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600': colorTheme === 'tidepool',
            'bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600': colorTheme === 'firelight',
            'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600': colorTheme === 'skyburst',
            'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800': colorTheme === 'nightfall',
        }
    );

    return (
        <div className={buttonStyles}>
            Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </div>
    )
}

export default MainCTAButton