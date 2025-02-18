import { useLayoutEffect } from "react";

// useLayoutEffect(() => {});

const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const scrolltop = e.currentTarget.scrollTop;
    window.history.replaceState(null, '', `?top=${scrolltop}`);
}

const ScrollBar: React.FC = () => {
    useLayoutEffect(() => {
        // 获取滚动条位置
        const top = new URLSearchParams(window.location.search).get('top');
        console.log('top: ', top);

        if(top) {
            const scrollBar = document.getElementById('scrollbar');
            scrollBar && (scrollBar.scrollTop = parseInt(top));
        }
    }, []);

    return (
        <div onScroll={scrollHandler} id="scrollbar" style={{ height: "400px", overflow: "auto" }}>
            {Array(1000)
                .fill(0)
                .map((item, index) => {
                    return <div key={index}>item: {item}</div>;
                })}
        </div>
    );
};

export default ScrollBar;
