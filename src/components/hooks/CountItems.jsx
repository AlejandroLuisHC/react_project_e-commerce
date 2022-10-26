import { useState } from 'react'

const CountItems = ({ value = 0 }) => {
    const [count, setCount] = useState(value);

  return (
    <div>{count}</div>
  )
}

export default CountItems