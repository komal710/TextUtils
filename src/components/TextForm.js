import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{ 
    let newText = '';
    setText(newText)
}
const handleCopy = () => {
  navigator.clipboard.writeText(text);
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
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
        <textarea className="form-control my-3"  value={text} style={{background: props.mode==='dark'?'grey':'white', color: props.mode === 'dark'?'white':'#33667c'}} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>

  </div>
  <div className='container my-3' style={{color: props.mode==='dark'?'white':'#33667c'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something in the above box to preview here"}</p>


  </div>


  </>
  )
}
