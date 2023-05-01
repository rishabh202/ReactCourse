import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

// Obv ctl+z for undo and ctl+y for redo.
// Shortcuts are usully first letter of each word, like for ImportPropTypes it is ipt.
// Note components are first letter must always be CAPITAL IMP {wasted an hour cause of this lol}

function App() {
  return(
    <>
   <Navbar title="TextManager" About="AboutUs"/>   
   <div className="container my-10000">
   <TextForm heading="Enter the text to analyse"/>      
   </div>
   <div className="container my-3">
   <About/>
   </div>
  
    </>
  )
}

export default App;
