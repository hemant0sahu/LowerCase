import React, { useState } from 'react'

export default function Textform(props) {
    const handleupclick = () => {
        console.log("uppercase was changed")
        let newText = text.toUpperCase();
        setText(newText)
        props.ShowAlert("converted to Uppercase", "success")

    }
    const handleloclick = () => {
        console.log("uppercase was changed")
        let newText = text.toLowerCase();
        setText(newText)
        props.ShowAlert("converted to LowerCase", "success")
    }
  
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then()
        
        props.ShowAlert("converted to Uppercase", "success")

    }
    const handleonchange = (event) => {
        console.log("handle was changed")
        setText(event.target.value);

    }


    const [text, setText] = useState('Enter Your text');
    // setText("new text"); aise change krte hai


    return (
        <>

            <div className="container" >
            <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'white' : 'white' }} rows="8"></textarea>
            </div>
            <div className='container'>

                <button className='btn btn-primary mx-1 my-1' onClick={handleupclick}>Convert to Upper case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleloclick}>Convert to Lower case</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            </div>

            <div className="container">
                <h1>Write Your text</h1>
                <p>{text.split(" ").filter((a1)=>{return a1.length!==0}).length} word and {text.length} character</p>
                {/* <p>{text.length > 0 ? text.split(" ").length : 0} word and {text.length} character</p> */}
                {/* <p>{text.split(" ").length} word and {text.length} character</p> */}
                <p>{0.08*text.split(" ").lenght}Minutes read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Enter Your word"}</p>

            </div>
        </>
    )
}
