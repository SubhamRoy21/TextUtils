    import React,{useState} from 'react'

    
    export default function Textform(props) {
        const handleUppercaseClick=()=>{
            console.log("Upper case button clicked"+text);
            let newText=text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to UpperCase","Success ");
        }
        const handleLowercaseClick=()=>{
            console.log("Lower case button clicked"+text);
            let newText=text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to LowerCase","Success ");

        }
        const handleOnChange=(event)=>{
            console.log("On change");
            setText(event.target.value);
        }
        const handlecopy=()=>{
            console.log("I am copy");
            let text = document.getElementById("exampleFormControlTextarea1");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Copied to Clipboard","Success");

        }
        const handleExtraSpaces=()=>{
            let newText=text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Removed extra spaces","Success");

        }
        const handleclear=()=>{
            let newText="";
            setText(newText);
            props.showAlert("Text Cleared","Success");

        }
        const handleUpper=()=>{
            let newText=text[0].toUpperCase()+text.slice(1);
            setText(newText);
            props.showAlert("Converted to UpperCase First Letter","Success");

        }
        const [text,setText]= useState('');
        return (
            <> 
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="20"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUppercaseClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-4" onClick={handleLowercaseClick}>Convert to LowerCase</button>
                <button className="btn btn-primary my-2 " onClick={handlecopy}>Copy to Clipboard</button>
                <button className="btn btn-primary my-2 mx-4 " onClick={handleExtraSpaces}>Remove extra spaces </button>
                <button className="btn btn-primary my-2 mx-2 " onClick={handleclear}>Clear Text </button>
                <button className="btn btn-primary my-2 mx-4 " onClick={handleUpper}>UpperCase of first letter in Text </button>
            </div> 
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text Summary</h1>
                <p>Your word has {text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </>
        
          

    )
    }
