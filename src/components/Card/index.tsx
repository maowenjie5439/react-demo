import React from 'react';
import './index.css'

interface Props {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
    callback?: (param: object) => void;
}
const Card: React.FC<Props> = ({ title = '默认标题', subtitle, children, callback }) => {
    console.log('props: ', { title, subtitle, children });
    callback && callback({'name': '张三', 'age': 18});
    return (
        <div className="card">
            <header>
                <div>{title}</div>
                <div>{subtitle}</div>
            </header>
            <main>{children}</main>
            <footer>
                <button onClick={() => console.log('Confirmed')}>确定</button>
                <button onClick={() => console.log('Cancelled')}>取消</button>
            </footer>
        </div>
    );
}

export default Card