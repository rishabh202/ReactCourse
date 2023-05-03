import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import { useState } from 'react';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Obv ctl+z for undo and ctl+y for redo.
// Shortcuts are usully first letter of each word, like for ImportPropTypes it is ipt.
// Note components are first letter must always be CAPITAL IMP {wasted an hour cause of this lol}
// Add a option to keep all the history of the text user provided (like backup type in form of history)
// Check how to make navbar sticky


function App() {
  
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not.
        const toggleMode = () => {
          if (mode === 'light'){
              setMode(`dark`)
              document.body.style.backgroundColor = '#343a40';
              showAlert("Dark mode has been enabled", "success");
              // document.title ="TextManager - DarkMode"

              // setInterval(() => {
              //   document.title = "TextManager is amazing"
              // }, 2000);
              // setInterval(() => {
              //   document.title = "Install TextManager Now "
              // }, 1500);
            }
            else {
              setMode('light')
              document.body.style.backgroundColor = 'white';
              showAlert("Light mode has been enabled", "success");
          }
        }  
        const [alert, setAlert] = useState(null);

      const showAlert = (message, type) => {
           setAlert({
            msg: message,
            type: type

           })
           setTimeout(() => {
               setAlert(null);
           }, 2100);
      }

  return(
    <>
   {/* <Navbar title="TextManager" About="AboutUs" mode={mode} toggleMode={toggleMode} sticky="top" />    */}
   <div className="container">
    {/* <Alert alert = {alert}/> */}
   {/* <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>       */}
   </div>
   <div className="container">
   </div>
        <Router>
            <Navbar title="TextManager" About="AboutUs" mode={mode} toggleMode={toggleMode} position="sticky" top="0" />
            <Alert alert = {alert}/>  
            <div className="container my-3">
              <Routes>   
                <Route path="/about" element={<About mode={mode}/>} />
                <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>} />
              </Routes>
            </div>
        </Router>
   {/* <About mode={mode}/> */}
    </>
  )
}

export default App;
