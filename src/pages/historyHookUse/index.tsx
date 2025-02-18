import { useHistory } from "@/hooks/useHistory"

const HistoryHookUse = () => {
    const [url, push, replace, back] = useHistory()
    return (
        <>
            <div>当前url: {url}</div>
            <button onClick={() => push('/X')}>push</button>
            <button onClick={() => replace('/Y')}>replace</button>
            <button onClick={back}>back</button>
        </>
    )
}

export default HistoryHookUse
