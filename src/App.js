import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor = '#33667c';
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/* <Navbar title='TextUtils1' aboutText="About TextUtils"/> */}
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}></Navbar>
    <div className='container' my-3>
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    {/* <About></About> */}
    </div>
    </>
  );
}

export default App;
