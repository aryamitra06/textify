import React, { useState } from 'react'




export default function Textform(props) {

    function toUpper(){
            let UpperCasedText = text.toUpperCase();
            setText(UpperCasedText); 
            props.showAlertinTextForm("Converted to Uppercase !", "Success");      
    }
    const toLower = ()=>{
        let LowerCasedText = text.toLowerCase();
        setText(LowerCasedText);
        props.showAlertinTextForm("Converted to Lowercase !", "Success");
    }
    function clearbtn(){
        let clear = "";
        setText(clear);
        props.showAlertinTextForm("Text cleared !", "Success");
}
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState("") //useState("") contains default value of the text state

    // const [btnText, SetBtnText] = useState("Enable Dark Mode"

//     const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
//     }
// )
// function toggleStyle(){
//     if(myStyle.color=== 'black')
//     {
//         setMyStyle({
//                 color: 'white',
//                 backgroundColor: 'black'
//             }
//         )
//         SetBtnText("Enable Light Mode");
//     }
//     else
//     {
//         setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white'
//             }
//         )
//         SetBtnText("Enable Dark Mode");
//     }
// }

function handleCopy(){
   const copiedText = document.getElementById('textBox');
   copiedText.select();
   document.execCommand("copy");
   props.showAlertinTextForm("Text copied to clipboard!", "Success");
}

function removeExtraSpaces(){
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlertinTextForm("Extra spaces removed !", "Success");
}

    return (
        <>
  
<div className="container mt-5" id="mainApp">
            <h3 className="">{props.heading}</h3>
            <textarea className="form-control" id="textBox" rows="15" value={text} onChange={handleOnchange} placeholder="Write something..."></textarea>
            <button className="btn btn-primary mt-2 mx-1" onClick= {toUpper}>Convert to Uppercase</button>
            <button className="btn btn-primary mt-2 mx-1" onClick= {toLower}>Convert to Lowercase</button>
            <button className="btn btn-primary mt-2 mx-1" onClick= {removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mt-2 mx-1" onClick= {clearbtn}>Clear</button>
            {/* <button className="btn btn-primary mt-2 mx-1" onClick= {toggleStyle}>{btnText}</button> */}
            <button className="btn btn-primary mt-2 mx-1" onClick= {handleCopy}>Copy</button>
            <br/><br/>
            <div className="container" id="mainCount">
            <h4>Word Count</h4>
            <p>{text.split(' ').filter(function(n) { return n !== '' }).length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Type something to see the preview..." }</p>
            <h3>Read Time</h3>
            <p>{0.008*text.split(' ').filter(function(n) { return n !== '' }).length} min(s)</p>
        </div>
        </div>

 
        </>
    )
}
