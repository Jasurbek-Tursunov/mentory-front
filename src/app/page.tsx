'use client'

import { useTelegram } from '@/lib/useTelegram'
import { Button } from '@/components/ui/button'

export default function HomePage() {
    const { isTelegram, tg } = useTelegram()

    const send = () => {
        tg?.sendData(JSON.stringify({ action: 'click', ts: Date.now() }))
    }

    return (
        <main className="flex items-center justify-center h-screen p-4 text-center">
            <div className="space-y-4">
                <h1 className="text-2xl font-bold">🚀 Telegram Mini App</h1>
                <p>
                    Ты в Telegram? → {isTelegram ? '✅ Да' : '❌ Нет'}
                </p>

                <Button onClick={send}>
                    Отправить данные в Telegram
                </Button>
            </div>
        </main>
    )
}
