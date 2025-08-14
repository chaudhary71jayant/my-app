import React,{useState} from 'react'
import './FormSnippet.css'



export default function FormSnippet(props) {
  const[text, setText] = useState("");
  const[wordCount, setWordCount] = useState(null);
  const[charCount, setCharCount] = useState(null);
  

    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!","success");
    }

    const lowerCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowe Case!","success");
    }

    const countWords = () =>{
        let count = text.trim().split(/\s+/).filter(word => word.length>0);
        let num = count.length;
        setWordCount(num);
        }

    const countChar = () =>{
      let count = text.length;
      setCharCount(count);
    }

    const clearText = () =>{
      setText("");
    }

    const handleCopy =()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Texts are copied sucessfully.","success");
    }

    const handleCapitalized = (e) =>{
      e.preventDefault();
      
      const upadated = text.replace(/([.!?]\s*)([a-z])/g, (match, seperator, char) => {
        return seperator+char.toUpperCase();
      });

      const final = upadated.charAt(0).toUpperCase() + upadated.slice(1);

      setText(final);
      props.showAlerts("Sucessfully Fixed to capitalilzed lines","success")
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }
  
    return (
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <div className="center-box">
          <h2>Text Transformer</h2>
          
          
          <textarea className="textArea" style={{color : props.mode==='dark'?'black':'black', backgroundColor : props.mode==='dark'?'grey':'white'}} value={text} onChange={handleChange} id='myBox' placeholder="Enter your text here..."></textarea>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-5">
            <button className='btn btn-primary flex-grow-1' onClick={upperCase}>UPPERCASE</button>
            <button className='btn btn-primary flex-grow-1' onClick={lowerCase}>lowercase</button>
            <button className='btn btn-primary flex-grow-1' onClick={countWords}>Count Words</button>
            <button className='btn btn-primary flex-grow-1' onClick={countChar}>Count Characters</button>
            <button className='btn btn-primary flex-grow-1' onClick={clearText}>Clear</button>
            <button className='btn btn-primary flex-grow-1' onClick={handleCopy}>Copy</button>
            <button className='btn btn-primary flex-grow-1' onClick={handleCapitalized}>Capitalized Line</button>
           
          </div>

          

          {wordCount != null && <p className='word'>Word Count : {wordCount}</p>}
          {charCount != null && <p className='char'>Characters count : {charCount}</p>}
        </div>
      </div>
  )
}
