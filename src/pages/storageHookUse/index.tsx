import { useStorage } from "@/hooks/useStorage"

const StorageHookUse = () => {
    // const [count, setCount] = useStorage("count", 0);
    // return (
    //     <>
    //         <h3>count: {count}</h3>
    //         <button onClick={() => setCount(count + 1)}>add</button>
    //         <button onClick={() => setCount(count - 1)}>subtract</button>
    //     </>
    // )

    const [state, setState] = useStorage('state', {name: 'mwj', hobby: [1,2,3]})

    return (
        <>
            <h3>name: {state.name} </h3>
            <button onClick={() => setState({name: 'bsy', hobby: [1,2,3]})}>Change Name</button>
        </>
    )
}

export default StorageHookUse;