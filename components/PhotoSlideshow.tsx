'use client'
import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { themes } from '@/contexts/themes'

export const PhotoSlideshow: React.FC = () => {
    const { colorTheme } = useTheme();
    const theme = themes[colorTheme];

    return (
        <div className={`flex flex-col justify-end items-center w-5/12 bg-gradient-to-r ${theme.background}`}>
            <img src="/SelfPortrait.png" alt="Anahadh Multani" className="w-auto h-auto max-h-[70vh] object-cover" />
        </div>
    )
}

