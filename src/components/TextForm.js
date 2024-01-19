import React,{useState, useEffect} from 'react';
import './custom.css'

const TextForm=React.memo((props)=> {
    const [text,setText] = useState('Enter text here..!');
    const [words,setWords] = useState(0);

    const textAreaChangeHandler = (event) =>{
        setText(event.target.value);
    }

    const toUpperCaseHandler = ()=>{
        console.log('to uppercase handler');
        let newText = text.toUpperCase();
        setText(newText);
        props.alertHandler('converted to Uppercase',1);
    }

    const toLowerCaseHandler = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.alertHandler('converted to Lowercase',1);
    }

    const clearHandler = ()=>{
        setText('');
        props.alertHandler('Cleared',2);
    }

    const trimHandler = ()=>{
        setText(text.trim());
        props.alertHandler('Trimmed',1);
    }

    const extraSpacesHandler=()=>{
        setText(text.replace(/\s+/g,' '));
        props.alertHandler('Extra spaces removed',1)
    }

    const titleCaseHandler=()=>{
        let words = text.split(' ');
        let titleCaseWords = words.map(word => word.charAt(0).toUpperCase()+word.slice(1));
        let titleCaseText = titleCaseWords.join(' ');
        setText(titleCaseText);
        props.alertHandler('converted to TitleCase',1);
    }

    useEffect(()=>{
        let txt = text.trim();
        let arr = txt.split(/\s+/);
        let newarr = arr.filter(arr=> arr.length>0);// here filter is using a callback function to verify a condition for every element in the array . It returns true for elements that satisfy the condition and push those elements only into the new array and doesn't modify the original array
        setWords(newarr.length);
    },[text]);

    const pasteHandler = async () => {
        try {
          const clipboardText = await navigator.clipboard.readText();
          setText(text + clipboardText);
        } catch (error) {
          console.error('Failed to paste from clipboard:', error);
        }
        props.alertHandler('Text Pasted',1);
      };
      
    const copyHandler = ()=>{
        navigator.clipboard.writeText(text);
        props.alertHandler('Text Copied',1);
    }

    return (
        <div className="mb-3 container">
            <label htmlFor="myBox" className="form-label my-3"><h2 style={{ color: '#6A994E' }}>Enter your Text here</h2></label>
            <textarea className="form-control glow-green" value={text} onChange={textAreaChangeHandler} id="myBox" rows="8" ></textarea>
            <div className='container mt-3'>
                <p>{words} words, {text.length} characters</p>
            </div>
            <div className="container-lg">
                <button type="button" className="btn btn-outline-success my-3 me-3" onClick={toUpperCaseHandler}>toUpperCase</button>
                <button type="button" className="btn btn-outline-success my-3 me-3" onClick={toLowerCaseHandler}>toLowerCase</button>
                <button type="button" className="btn btn-outline-success my-3 me-3" onClick={titleCaseHandler}>toTitleCase</button>
                <button type="button" className="btn btn-outline-success my-3 me-3" onClick={trimHandler}>Trim</button>
                <button type="button" className="btn btn-outline-success my-3 me-3" onClick={extraSpacesHandler}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-outline-success my-3 me-3" onClick={copyHandler}>Copy</button>
                <button type="button" className="btn btn-outline-success my-3 me-3" onClick={pasteHandler}>Paste</button>
                <button type="button" className="btn btn-outline-danger my-3 me-3" onClick={clearHandler}>Clear</button>
            </div>
            
        </div>
    )
});

export default TextForm;