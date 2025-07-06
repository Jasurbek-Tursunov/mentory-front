'use client'

import { useEffect, useState } from 'react'

type TelegramResult = {
    isTelegram: boolean
    tg: TelegramWebApp | null
}

export function useTelegram(): TelegramResult {
    const [tg, setTg] = useState<TelegramWebApp | null>(null)
    const [isTelegram, setIsTelegram] = useState(false)

    useEffect(() => {
        const isInsideTelegram = typeof window !== 'undefined' &&
            window.Telegram?.WebApp !== undefined

        setIsTelegram(isInsideTelegram)

        if (isInsideTelegram) {
            const webApp = window.Telegram!.WebApp
            webApp.ready()
            webApp.expand()
            setTg(webApp)
        } else {
            // Если не Telegram — подгружаем SDK
            const script = document.createElement('script')
            script.src = 'https://telegram.org/js/telegram-web-app.js'
            script.async = true
            script.onload = () => {
                if (window.Telegram?.WebApp) {
                    const webApp = window.Telegram.WebApp
                    webApp.ready()
                    webApp.expand()
                    setIsTelegram(true)
                    setTg(webApp)
                }
            }
            document.head.appendChild(script)
        }
    }, [])

    return { isTelegram, tg }
}
