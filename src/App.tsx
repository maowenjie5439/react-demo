import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "@/components/Card";
import { showMessage } from "@/components/Message";

function App() {
    const [count, setCount] = useState(0);

    const fn = (param: object) => {
        console.log("父组件的fn函数被调用", param);
    };

    // 同步代码
    setTimeout(() => {
        console.log("3. setTimeout 执行");
    }, 1);
    useEffect(() => {
        const app = document.getElementById("app");
        console.log("app组件被渲染了: ", app);
        return () => {
            console.log("app组件被卸载了");
        };
    }, [count]);

    const cards = document.getElementsByClassName("card");
    console.log("cards: ", cards);
    const [username, setUsername] = useState("mwj");
    return (
        <>
            <div>
                <div id="app"></div>
            </div>
            <Card title="瑞幸咖啡" subtitle="副标题" callback={fn}>
                <div>内容</div>
            </Card>
            <hr />
            <div>{username}</div>
            <button onClick={() => setUsername("mw")}>Change Username</button>
            {/* <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1> */}
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {/* <button onClick={() => showMessage('Hello')}>Show Message</button> */}
        </>
    );
}

export default App;
