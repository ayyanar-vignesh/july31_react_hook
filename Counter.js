import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;

// Explanation
// useState Hook: The useState hook is used to add state to a functional component. It returns an array with two elements: the current state value and a function to update it.
// State Variable: In this example, count is the state variable, and setCount is the function to update count.
// Event Handler: The onClick event handler updates the state by calling setCount with the new state value (count + 1).
