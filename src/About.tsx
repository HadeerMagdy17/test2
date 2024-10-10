import { useContext } from "react";
import { CounterContext } from './Context/CounterContext';

export default function About() {

  let{counter,increasCount}:any=useContext(CounterContext)

  return (
    <div className="col-md-6 p-5 bg-danger text-center d-flex flex-column align-items-center justify-content-center">
       <h3>About</h3>
       <h3>count is {counter}</h3>
       <button onClick={increasCount} className="btn btn-success">increase</button>
       
    </div>
  );
}
