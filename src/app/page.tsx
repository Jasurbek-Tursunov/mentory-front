'use client'

import { useTelegram } from '@/lib/useTelegram'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function HomePage() {
    const { tg, theme } = useTelegram()

    useEffect(() => {
        if (!tg) return

        tg.MainButton.setText('Отправить ✅')
        tg.MainButton.show()

        tg.MainButton.onClick(() => {
            tg.sendData(JSON.stringify({ message: 'Данные отправлены!' }))
        })

        return () => {
            tg.MainButton.offClick(() => {})
            tg.MainButton.hide()
        }
    }, [tg])

    return (
        <main
            className="min-h-screen flex items-center justify-center p-4"
            style={{
                backgroundColor: theme.bgColor,
                color: theme.textColor,
            }}
        >
            <div className="text-center space-y-4">
                <h1 className="text-2xl font-bold">👋 Telegram Mini App</h1>
                <p className="text-base">Тема: {theme.theme}</p>

                <Button
                    onClick={() => {
                        tg?.sendData(JSON.stringify({ action: 'clicked_button' }))
                    }}
                    style={{
                        backgroundColor: theme.buttonColor,
                        color: theme.buttonTextColor,
                    }}
                >
                    Локальная кнопка
                </Button>
            </div>
        </main>
    )
}
