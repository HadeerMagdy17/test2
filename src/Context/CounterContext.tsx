//create context
//providing

import { createContext } from "react";
import { useState } from 'react';


export let CounterContext=createContext(0)

export default function CounterContextProvider(props:any){

let [counter,setCounter]=useState(0);

let increasCount=()=>{
  setCounter((counter+=1))
}

let decreasCount=()=>{
  setCounter((counter-=1))
}

return(
  <CounterContext.Provider value={{counter,increasCount,decreasCount}}>
   {props.children}
  </CounterContext.Provider>
)


}