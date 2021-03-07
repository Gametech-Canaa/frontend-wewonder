import React from "react";

import Routes from "./routes";

import GlobalStyles from "./assets/styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


function App() {
  return (
    <>
    
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
