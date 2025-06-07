export const themes = {
    dreamscape: {
        background: 'bg-gradient-to-r from-purple-500 to-pink-500',
        hoverBackground: 'hover:from-purple-600 hover:to-pink-600',
    },
    tidepool: {
        background: 'bg-gradient-to-r from-blue-500 to-green-500',
        hoverBackground: 'hover:from-blue-600 hover:to-green-600',
    },
    firelight: {
        background: 'bg-gradient-to-r from-red-500 to-yellow-500',
        hoverBackground: 'hover:from-red-600 hover:to-yellow-600',
    },
    skyburst: {
        background: 'bg-gradient-to-r from-pink-500 to-purple-500',
        hoverBackground: 'hover:from-pink-600 hover:to-purple-600',
    },
    nightfall: {
        background: 'bg-gradient-to-r from-orange-800 to-blue-900',
        hoverBackground: 'hover:from-orange-700 hover:to-blue-800',
    }
}

export type ColorTheme = keyof typeof themes;