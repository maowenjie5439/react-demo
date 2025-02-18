import { useReducer, useState } from "react";
    
const state = { count: 0 };

type StateType = typeof state;

const initState = { count: 0 };
const initFn = (initialState: StateType) => {
    return { count: Math.abs(initialState.count) };
};

const reducer = (state: StateType, action: { type: 'add' | 'sub' }) => {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 };
        case 'sub':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const ReducerUseDemo: React.FC<any> = () => {
    const [state, dispatch] = useReducer(reducer, initState, initFn)
    return (
        <>
            <button onClick={() => dispatch({ type: 'add' })}>+1</button>
            <button onClick={() => dispatch({ type: 'sub' })}>-1</button>
            <div>count: {state.count}</div>
        </>
    );
};

export default ReducerUseDemo;
