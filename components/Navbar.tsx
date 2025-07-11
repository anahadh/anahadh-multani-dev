'use client'
import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { themes } from '../contexts/themes'

type NavButton = {
    name: string;
    href: string;
  }

const navButtons: NavButton[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/",
  },
  {
    name: "Projects",
    href: "/",
  },
  {
    name: "Contact",
    href: "/",
  }
]

export const Navbar = () => {
    const { colorTheme } = useTheme();
    const theme = themes[colorTheme];

    return (
        <nav className="relative flex p-5 text-purple gap-x-10 ml-auto items-center">
            {navButtons.map((button) => {
                return <div className="relative group" key={button.name}>
                    <a href={button.href} key={button.name} className="text-2xl font-black font-notoSans relative z-0">
                        {button.name}
                    </a>
                    <div className={`absolute bottom-[-5] left-0 h-1 bg-gradient-to-r ${theme.background} transform w-0 group-hover:w-full transition-all duration-300 ease-in-out`}></div>
                </div>
            })}
        </nav>
    )
}

