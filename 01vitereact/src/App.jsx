import Chai from "./Chai"
import { useState } from "react";
function App() {
let [counter,setCounter]= useState(0)

 const addValue=()=>{
  if(counter===20)
  {
  alert("dont exceed 20")
  setCounter(0);
  }
  //  counter=counter+1;  
  else{
    setCounter(counter+1)
  }
 }
 const subValue=()=>{
  if(counter===0)
  {
    alert("dont go below 0")
    setCounter(0)
  }
  else{
    setCounter(counter-1)
  }
 }
  return (
   <>
   <h1>Counter Project {counter}</h1>
   <button onClick={addValue}>ADD</button>
   <button onClick={subValue}>SUB</button>
   </>
  )
}

export default App
