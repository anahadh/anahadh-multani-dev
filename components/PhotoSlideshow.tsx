'use client'
import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { themes } from '@/contexts/themes'

export const PhotoSlideshow: React.FC = () => {
    const { colorTheme } = useTheme();
    const theme = themes[colorTheme];

    return (
        <div className={`flex flex-col justify-center items-center w-1/2 mx-auto bg-gradient-to-r ${theme.background}`}>
            <p className='text-5xl'>Image Placeholder</p>
        </div>
    )
}

