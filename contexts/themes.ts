export const themes = {
    tidepool: {
        background: 'from-blue-500 to-green-500',
        hoverBackground: 'hover:from-blue-600 hover:to-green-600',
    },
    dreamscape: {
        background: 'from-purple-500 to-pink-500',
        hoverBackground: 'hover:from-purple-600 hover:to-pink-600',
    },
    firelight: {
        background: 'from-red-500 to-yellow-500',
        hoverBackground: 'hover:from-red-600 hover:to-yellow-600',
    },
    skyburst: {
        background: 'from-pink-500 to-blue-500',
        hoverBackground: 'hover:from-pink-600 hover:to-blue-600',
    },
    nightfall: {
        background: 'from-orange-800 to-blue-900',
        hoverBackground: 'hover:from-orange-700 hover:to-blue-800',
    }
}

export type ColorTheme = keyof typeof themes;