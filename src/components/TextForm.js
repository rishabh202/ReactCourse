import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
        
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
  }
  
  const handleLowClick = () => {
        
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
  }
  
  const handleOnChange = (event) => {
        // event.preventDefault();
        // console.log("On Change");
        setText(event.target.value)
       
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  // const reversed = () => {
  //   let splitWord = text.split("");

  //   let reverseWord = splitWord.reverse("");
  //   let joinedWords = reverseWord.join("");
  //   let newText = joinedWords

  //   setText(newText);
  // };

  const replacecasefunc = () => {
    let existing_text = prompt("Enter which word to replace : ");
    let replaced_text = prompt("Enter New Text");
    setText(text.replaceAll(existing_text, replaced_text))
  }

  
      const copyContent = async () => {
      let text = document.getElementById('exampleFormControlTextarea1').innerHTML;
      try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }

  

  // Add a function about copying text, also to count the number to vowels and consonant

  const [text, setText] = useState('');
  // setText("New Text");    
  return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        
    <div className="form-group mb-3">       
      <textarea className="form-control" value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
    </div>
    
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>
    <button type="button" onClick={speak}class="btn btn-primary mx-2">Text-to-Speech</button>
    {/* <button type="button" onClick={reversed}class="btn btn-primary ">Reverse</button> */}
    <button type="button" onClick={replacecasefunc}class="btn btn-primary">Replace</button>
    <button type="button" onClick={copyContent}class="btn btn-primary mx-2">Copy</button>
  </div>
     <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes required to read (Approx)</p>
      <h3>Preview</h3>
      <p>{text}</p>
     </div>

    </>
  )
}

// You can add dummy text, it will be better, that way, preview with also have something in it. or add box to preview just like textArea

