import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "@/components/Card";
import { showMessage } from "@/components/Message";
import ScrollBar from "./pages/scrollBar";
import ReducerUse from "./pages/reducerUse";
import StorageHookUse from "./pages/storageHookUse";
import HistoryHookUse from "./pages/historyHookUse";
function App() {
    const [state, setState] = useState(0)

    useEffect(() => {
        console.log('app组件渲染了')
    }, [state])
    return (
        <>
            {/* <div>Name: {state}</div> */}
            {/* <button onClick={() => setState(0)}>点击</button> */}
            {/* <ScrollBar></ScrollBar> */}
            {/* <ReducerUse></ReducerUse> */}
            {/* <StorageHookUse></StorageHookUse> */}
            <HistoryHookUse></HistoryHookUse>
        </>
    )
}

export default App;
