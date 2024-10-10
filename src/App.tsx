
// import "./App.css";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Login from "./Login";

// function App() {
 

//   return (
//     <>
   
//       {/* <div className="container">
//         <div className="row">
//           <Home />
//           <About />
//           <Contact />
//         </div>
//       </div> */}

//        <Login/>
//     </>
//   );
// }

// export default App;

import { useState } from 'react'

import './App.css'
import Home from './Components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './Components/AuthLayout'
import Login from './Components/Login/Login'
import MasterLayout from './Components/MasterLayout/MasterLayout'
import UserData from './Components/UserData/UserData'
import Profile from './Components/Profile/Profile';
import UsersList from './Components/UsersList'
import NotFound from './Components/NotFound/NotFound'

function App() {
  const routes=createBrowserRouter([
    {
      path:"",
      element:<AuthLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<Login/>},
        {path:"login",element:<Login/>}    
      ]

    },
    {
      path:"dashboard",
      element:<MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        {index:true,element:<Home/>},
        {path:"home",element:<Home/>},
        {path:"user-data",element:<UserData/>},
        {path:"profile",element:<Profile/>},
        {path:"users-list",element:<UsersList/>},

      ]
    }
  ])

  return (
    <>
   <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
