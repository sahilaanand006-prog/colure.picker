import React , { useState } from 'react';

function Mycounter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    };

    function decrement() {
        setCount(count - 1);
    };

    function reset() {
        setCount(0);
    }

    return (<div>
        <h2>My Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
    );
}

export default Mycounter;