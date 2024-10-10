import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import CounterContextProvider from "./Context/CounterContext.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <CounterContextProvider>

   <App />
   </CounterContextProvider>
      
   
  </StrictMode>
);
