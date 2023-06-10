import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
 console.log(puppyList)
 const [puppies, setPuppies] = useState(puppyList)
  return (
    <>
    <h1>Test</h1>
    </>
  )
}

export default App
