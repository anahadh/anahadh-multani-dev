"use client";
import React from 'react'
import { themes, ColorTheme } from './themes';

type ThemeContextType = {
  toggleColorTheme: (theme: ColorTheme) => void;
  colorTheme: ColorTheme;
  colors: {
    background: string;
    hoverBackground: string;
  }
}; 

type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>('dreamscape');

  const toggleColorTheme = (theme: ColorTheme) => {
    setColorTheme(theme);
  }

  const colors = themes[colorTheme];

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleColorTheme, colors }}>
        {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}