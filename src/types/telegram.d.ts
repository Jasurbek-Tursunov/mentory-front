export {}

declare global {
    interface Window {
        Telegram?: {
            WebApp: TelegramWebApp
        }
    }

    interface TelegramWebApp {
        initData: string
        initDataUnsafe: any
        version: string
        platform: string
        colorScheme: 'light' | 'dark'
        themeParams: {
            bg_color?: string
            text_color?: string
            button_color?: string
            button_text_color?: string
        }
        isExpanded: boolean
        expand(): void
        close(): void
        ready(): void
        sendData(data: string): void

        MainButton: {
            show(): void
            hide(): void
            setText(text: string): void
            onClick(cb: () => void): void
            offClick(cb: () => void): void
        }

        BackButton: {
            show(): void
            hide(): void
            onClick(cb: () => void): void
        }

        HapticFeedback: {
            impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): void
        }
    }
}
