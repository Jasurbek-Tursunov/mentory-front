'use client'

import { useEffect, useState } from 'react'

type Theme = {
    textColor?: string
    bgColor?: string
    buttonColor?: string
    buttonTextColor?: string
    theme: 'light' | 'dark'
}

export function useTelegram() {
    const [tg, setTg] = useState<Window['Telegram']['WebApp']>()
    const [theme, setTheme] = useState<Theme>({
        theme: 'light',
    })

    useEffect(() => {
        if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp

            webApp.ready()
            webApp.expand()

            setTg(webApp)

            setTheme({
                textColor: webApp.themeParams.text_color,
                bgColor: webApp.themeParams.bg_color,
                buttonColor: webApp.themeParams.button_color,
                buttonTextColor: webApp.themeParams.button_text_color,
                theme: webApp.colorScheme === 'dark' ? 'dark' : 'light',
            })
        }
    }, [])

    return { tg, theme }
}
