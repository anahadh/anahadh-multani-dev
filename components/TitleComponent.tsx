'use client'
import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { themes } from '@/contexts/themes'

type TitleComponentProps = {
    title: string;
    size: number;
    style?: 'gradient' | 'solid';
    margin?: number;
}

export const TitleComponent: React.FC<TitleComponentProps> = (props) => {
    const { title, size, style, margin } = props;

    const { colorTheme } = useTheme();
        
    const theme = themes[colorTheme];
    
    return (
        <div className={`bg-gradient-to-r ${theme.background} bg-clip-text text-transparent`}>
            <p className={`text-${size}xl font-bold font-arvo mb-${margin || 0}`}>{title}</p>
        </div>
    )
}
