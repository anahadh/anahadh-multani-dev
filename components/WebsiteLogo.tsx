'use client'
import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { themes } from '../contexts/themes'

export const WebsiteLogo: React.FC = () => {
    const { colorTheme } = useTheme();
    
    const theme = themes[colorTheme];

    const gradientClass = `bg-gradient-to-r ${theme.background} bg-clip-text text-transparent`;
    
    return (
        <div className={gradientClass}>
            <div className="absolute -bottom-4 left-0 text-xs text-black">
                Current theme: {colorTheme}
            </div>
            <p className="text-3xl font-bold">anahadh.multani.dev</p>
        </div>
    )
}