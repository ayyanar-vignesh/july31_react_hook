import React, { useState, useEffect } from 'react';

function CounterUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`);

    return () => {
      console.log('Cleaning up');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default CounterUseEffect;


// useEffect hook to perform side effects in a functional component,
//  with a focus on logging the count and performing cleanup when necessary.


