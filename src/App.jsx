import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
 const [puppies, setPuppies] = useState(puppyList)
 console.log(puppies)
  return (
    <>
    <h1>Test</h1>
    { 
   puppies.map((puppy) => {
     return <p>{puppy.name}</p>
   })
}
    </>
  )
}

export default App
