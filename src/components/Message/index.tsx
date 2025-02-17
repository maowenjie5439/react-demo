import { createRoot, Root} from "react-dom/client";
import "./index.css";
const list:Item[]= []
interface Item{
    root: Root,
    msgContainer: HTMLDivElement
}
function showMessage(msg: string) {
    const msgContainer = document.createElement("div");
    msgContainer.className = "message";
    msgContainer.style.top = `${list.length * 40}px`
    document.body.appendChild(msgContainer);
    
    const root = createRoot(msgContainer);
    root.render(<div>{msg}</div>);

    list.push({root, msgContainer})

    setTimeout(() => {
        const item = list.find(item => item.msgContainer === msgContainer)
        if(item){
            item.root.unmount()
            document.body.removeChild(msgContainer)
            list.splice(list.indexOf(item), 1);
        }
    }, 2 * 1000);
}

export { showMessage }