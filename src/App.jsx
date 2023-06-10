import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
 const [puppies, setPuppies] = useState(puppyList)
 const [featPupId, setFeatPupId] = useState(null)
 console.log("puppyList: ", puppyList);
  return (
    <>
    <h1>Puppies</h1>
    <div className="App">
      {
        puppies.map((puppy) => {
          return <p onClick={()=>{}} key={puppy.id}>{puppy.name}</p>;
        })
      }
    </div>
    </>
  );
}

export default App
