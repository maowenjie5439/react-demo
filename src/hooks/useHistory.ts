import { useSyncExternalStore } from "react"

// url的push和replace
export const useHistory = () => {
    const subscribe = (callback: () => void) => {
        window.addEventListener('popstate', (event) => {
            console.log('popstate事件触发了', event)
            callback()
        })
        return () => {
            window.removeEventListener('popstate', callback)
        }
    }

    const getSnapshot = () => {
        // 获取当前的url
        return window.location.href
    }
    const url = useSyncExternalStore(subscribe, getSnapshot)

    const push = (url: string) => {
        window.history.pushState({}, '', url)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    const replace = (url: string) => {
        window.history.replaceState({}, '', url)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    const back = () => {
        window.history.back()
    }

    return [url, push, replace, back] as const
    
}