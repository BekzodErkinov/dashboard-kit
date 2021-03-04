import { useState } from 'react'

const Ideas = () => {

  const [count, changeCount] = useState(0)
  
  function decrement() {
    if (count > 0)
      changeCount(count - 1)
  }
  function increment() {
    if (count < 10)
      changeCount(count + 1)
  }
  
  return (
    <div>
      <h1>Ideas</h1>

      <h1>Count: {count}</h1>

      {/*// * v1.1 */}
      {/* <button onClick={() => changeCount(count > 0 ? count - 1 : 0)}>-</button>
      <button onClick={() => changeCount(count + 1)}>+</button> */}
      {/*// * v1.2 */}
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Ideas
