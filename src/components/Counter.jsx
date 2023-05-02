import { useState } from 'react';
import '../styles/Counter.css'


const Counter = () => {

    const [count, setCount] = useState(0)

    function increment() {
       setCount(count + 1)
    }
    function decrement() {
        setCount(count - 1)
    }

    return (
        <div className='counter'>
            <h1 className='counter__title'>{count}</h1>
            <button onClick={decrement} className='counter__button'>Increment</button>
            <button onClick={increment} className='counter__button'>Decrement</button>
        </div>
    )
}

export default Counter;