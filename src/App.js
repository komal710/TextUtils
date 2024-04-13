import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,//insted of Switch
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert,setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
 
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor = '#33667c';
      showAlert("Dark mode has been enabled", 'success')
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", 'success')
    }
  }
  return (
    <>
    {/* <Navbar title='TextUtils1' aboutText="About TextUtils"/> */}
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}></Navbar>
    <Alerts alert={alert}></Alerts>
    <div className='container' my-3>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
                      
          </Route>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

