import { useContext } from "react"
import { CounterContext } from './Context/CounterContext';


export default function Navbar() {

  let{counter,decreasCount}=useContext(CounterContext)
   
  return (
    <>
         <div>
         <div className="bg-warning p-5 my-2 flex-column text-center d-flex align-items-center justify-content-center">
            Navbar 
            <h3>count is {counter}</h3>
            <button onClick={decreasCount} className="btn btn-primary">decrease</button>
         
            </div>
         </div>
        
   
      </>
    
  )
}
