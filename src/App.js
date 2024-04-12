import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title='TextUtils1' aboutText="About TextUtils"/>
    <div className='container' my-3>
    {/* <TextForm heading="Enter the text to analyze"/> */}
    <About></About>
    </div>
    </>
  );
}

export default App;