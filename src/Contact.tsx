import React, { useContext } from 'react'
import { CounterContext } from './Context/CounterContext';

export default function Contact() {
 let {counter}= useContext(CounterContext)
  return (
    <div className="col-md-6 p-5 bg-success text-center d-flex flex-column align-items-center justify-content-center">
   <h3>Contact</h3>
   count is {counter}
  </div>
  )
}
