import { useSyncExternalStore } from "react";

export const useStorage = <T = any>(key: string, initValue: T):[T, (value: T) => void] => {
    const lastState = initValue

    const subscribe = (callback: () => void) => {
        // 添加订阅
        const handleStorageChange = (event: Event) => {
            console.log("storage 时间触发了，event", event);
            callback();
        }
        window.addEventListener("storage", handleStorageChange);
        // 返回取消订阅函数
        return () => window.removeEventListener("storage", handleStorageChange);
    };

    let previousValue: T | null = null;

    const getSnapshot = (): T => {
        const value = localStorage.getItem(key);
        const parsed = value ? JSON.parse(value) : initValue;
        
        // 如果之前有缓存的值，进行值比较
        if (previousValue && JSON.stringify(previousValue) === JSON.stringify(parsed)) {
            return previousValue;
        }
        
        previousValue = parsed;
        return parsed;
    };

    const state = useSyncExternalStore(subscribe, getSnapshot);

    const setState = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
        window.dispatchEvent(new StorageEvent("storage"));
    };

    return [state, setState];
};

// const [state, setState] = useState('aaa', {})
