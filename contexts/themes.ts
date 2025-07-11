export const themes = {
    tidepool: {
        background: 'from-blue-500 to-green-500',
        hoverBackground: 'hover:ring-[7px] hover:ring-teal-500/50',
    },
    dreamscape: {
        background: 'from-purple-500 to-pink-500',
        hoverBackground: 'hover:ring-[7px] hover:ring-pink-300/50',
    },
    firelight: {
        background: 'from-red-500 to-yellow-500',
        hoverBackground: 'hover:ring-[7px] hover:ring-yellow-500/50',
    },
    skyburst: {
        background: 'from-pink-500 to-blue-500',
        hoverBackground: 'hover:ring-[7px] hover:ring-blue-300/50',
    },
    nightfall: {
        background: 'from-orange-800 to-blue-900',
        hoverBackground: 'hover:ring-[7px] hover:ring-gray-300/50',
    }
}

export type ColorTheme = keyof typeof themes;