import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
 const [puppies, setPuppies] = useState(puppyList)
 const [featPupId, setFeatPupId] = useState(null)
 console.log("puppyList: ", puppyList);
 const featuredPup = puppies.find((pup)=> pup.id === featPupId)
 console.log(featuredPup);
  return (
    <>
    <h1>Puppies</h1>
    <div className="App">
      {
        puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })
      }
    </div>
   {featPupId && <p>{featPupId}</p> }
    </>
  );
}

export default App
