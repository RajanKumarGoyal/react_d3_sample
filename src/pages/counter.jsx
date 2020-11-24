import React, { useMemo, useState } from 'react';
import logo from "../logo.svg";
import CounterChild from "../components/CounterChild";

const Counter = () => {

    const [count, SetCounter] = useState(0);

    const onClickHandle = () => {
        SetCounter(count+1);
    }

    // const MemoCounter = useMemo(() => {
    //     return <CounterChild />
    // }, [count]);

    return (

        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Counter : { count }</h1>
                <button onClick={onClickHandle}>Increment</button>
                <h1>Normal Render</h1>
                <CounterChild />
                {/* <h1>Memorized Render</h1>
                <MemoCounter /> */}
            </header>
        </div>
    );
};

export default Counter;