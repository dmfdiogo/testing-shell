import { IPerson } from "@/types"
import { useState } from "react"

const Header = () => {
    const [counter, setCounter] = useState(0)

    const person: IPerson = {
      name: 'Person',
      age: 10
    }
    
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
    </div>
  )
}

export default Header