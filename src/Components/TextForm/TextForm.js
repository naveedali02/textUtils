import React,{ useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");
    const handleUcText = ()=>{
        console.log("upper case");
        debugger;
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLCText = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleremoveExtraSpace = ()=>{
        let newText = text.replace(/\s+/g,' ');
        setText(newText)
    }
    const handleCopyClipBoard = ()=>{
        navigator.clipboard.writeText(text);
        
    }
    const handleFirstLetterCapi = ()=>{
        let newText = text.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());
        setText(newText)
        
    }
    const handleClearText = ()=>{
        setText("");
        
    }

    const onChangeHandle = event=>{
        setText(event.target.value) 
    }
   
    return (
        
        <>
          <div className="container">
            
              <h1 style={{ color: props.appMode === 'dark'? 'white': '#212529' }}>Enter here your text</h1>
              <div className="form-group mb-3">
                <label className="form-label">Enter text</label>
                <textarea className="form-control" rows="5" value={text} onChange={onChangeHandle} style={{background: props.appMode === 'dark'? '#343739': '#fff', color: props.appMode=== 'dark'? '#fff': '#343739'}}>
                </textarea>
              </div>
              <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={handleUcText}>Upper Case</button>
                    <button type="button" className="btn btn-warning" onClick={handleLCText}>Lower Case</button>
                    <button type="button" className="btn btn-success" onClick={handleremoveExtraSpace}>Remove Extra Spaces</button>
                    <button type="button" className="btn btn-info" onClick={handleCopyClipBoard}>Copy to clipboard</button>
                    <button type="button" className="btn btn-primary" onClick={handleFirstLetterCapi}>First Letter Capital of Each Sentence</button>
                    <button type="button" className="btn btn-secondary" onClick={handleClearText}>Clear Text</button>
                </div>

          </div>
          <div className="container my-3">
              <h1 style={{ color: props.appMode === 'dark'? 'white': '#212529' }}>Text Utiles Summary</h1>
              <p style={{ color: props.appMode === 'dark'? 'white': '#212529' }}><strong className="text-danger">{text.split(" ").filter(ele =>{return ele.length !== 0}).length}</strong> words and <strong className="text-danger">{text.length}</strong> characters are in given text </p>
              <p style={{ color: props.appMode === 'dark'? 'white': '#212529' }}>{0.008 * text.split(" ").filter(ele =>{return ele.length !== 0}).length} Mintus required for reading this text</p>
              <h1 className="my-3" style={{ color: props.appMode === 'dark'? 'white': '#212529' }}>Text Preview</h1>
              <p style={{ color: props.appMode === 'dark'? 'white': '#212529' }}>{text.length === 0 ? "There is no Text for preview" : text}</p>

          </div>
        </>
    )
}

export default TextForm
