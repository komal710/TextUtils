import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case","Success");
  }
  const handleLoClick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case","Success");
  }
  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
    props.showAlert("Cleared Text Case","Success");
}
const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Copied Text Case","Success");
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed Extra Space Case","Success");
}
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
   
  }

  
  const [text, setText] = useState("");
  return (
    <>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#33667c'}} >
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control my-3"  value={text} style={{background: props.mode==='dark'?'#33667c':'white', color: props.mode === 'dark'?'white':'#33667c'}} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

  </div>
  <div className='container my-3' style={{color: props.mode==='dark'?'white':'#33667c'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to"}</p>


  </div>


  </>
  )
}
