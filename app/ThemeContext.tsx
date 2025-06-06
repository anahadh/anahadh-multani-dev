"use client";
import React from 'react'

type ColorTheme = 'dreamscape' | 'tidepool' | 'firelight' | 'skyburst' | 'nightfall';

type ThemeContextType = {
  toggleColorTheme: (theme: ColorTheme) => void;
  colorTheme: ColorTheme;
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

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
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