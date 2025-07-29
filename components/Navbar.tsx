'use client'
import React from 'react'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTheme } from '../contexts/ThemeContext'
import { themes } from '../contexts/themes'

type NavButton = {
    name: string;
    href: string;
  }

const navButtons: NavButton[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  }
]

export const Navbar = () => {
    const { colorTheme, toggleColorTheme } = useTheme();
    const theme = themes[colorTheme];

    const handleNavClick = (id: string) => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    };    

    return (
        <nav className="relative flex p-5 text-black gap-7 ml-auto items-center">
            <div className='flex gap-x-10 '>
              {navButtons.map((button) => {
                  return <div className="relative group" key={button.name}>
                      <button onClick={() => handleNavClick(button.href)} key={button.name} className="text-2xl font-black font-notoSans relative z-0">
                          {button.name}
                      </button>
                      <div className={`absolute bottom-[-5] left-0 h-1 bg-gradient-to-r ${theme.background} transform w-0 group-hover:w-full transition-all duration-300 ease-in-out`}></div>
                  </div>
              })}
            </div>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className={`text-2xl font-black relative z-0 rounded-full`}>
                  <div className={`h-10 aspect-square rounded-full bg-gradient-to-r ${theme.background} shadow-lg transition-all duration-200 ease-in-out hover:scale-[1.15] hover:shadow-xl active:scale-105`} />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="bg-white rounded-xl shadow-xl mt-4">
                    {Object.keys(themes).map((themeKey) => (
                        <DropdownMenu.Item
                            key={themeKey}
                            onClick={() => {
                                toggleColorTheme(themeKey as keyof typeof themes);
                            }}
                            className={`flex flex-row justify-between items-center gap-5 p-3 group transition-opacity duration-200 ease-in-out hover:bg-gray-100 font-notoSans cursor-pointer`}
                        >
                          <div className={`bg-gradient-to-r ${themes[themeKey as keyof typeof themes].background} rounded-full h-3 w-3 transition-transform duration-200 ease-in-out group-hover:scale-110`}></div>  
                          <div className={`bg-gradient-to-r ${themes[themeKey as keyof typeof themes].background} bg-clip-text transition-all duration-200 ease-in-out group-hover:text-transparent font-bold`}>
                            {themeKey}
                          </div>
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </nav>
    )
}

