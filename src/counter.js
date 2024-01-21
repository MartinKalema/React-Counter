import React from 'react'
import { useState } from 'react'
import './style.css'

export default function Counter() {
  
  const [count, setCount] = useState(0);
  // increment counter
  const increment = () => setCount(count + 1);
  // decrement counter
  const decrement = () => setCount(count - 1);

  return (
    <>
    <div className ="container">
        <div className='number'>{count}</div>
    </div>

    <section className='btns-container'>
        <button onClick={increment} className='increment'>+</button>
        <button onClick={decrement} className='decrement'>-</button>
    </section>
    </>
  );
}
