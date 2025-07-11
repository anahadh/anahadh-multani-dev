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
            <p className="text-3xl font-bold font-arvo">anahadh.multani.dev</p>
        </div>
    )
}