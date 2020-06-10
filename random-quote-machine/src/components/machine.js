import React,{useState,useEffect} from 'react';
import {index} from './quote'

const Machine =()=> {
    let [text,setText]= useState([]);
    let [author,setAuthor] = useState([])
    let [state, setState] = useState([])

   const handleQuote = () => {
       state = index()
       setText(state.text)
       setAuthor(state.author)
       console.log(state.i)
    }

    useEffect(()=>{
handleQuote()

    },[])

    return (
        <div id="quote-box">
        <div id="text"><span>{text}</span></div>
    <div id="author">{author}</div>
        <div id="tweet-quote">
        <a  href="https://www.twitter.com/intent/tweet">tweet</a>
    </div>
        <div id="new-quote" >
        <button id="new" onClick={handleQuote} >New Quote</button>
    </div>
    </div>
    );
}

export default Machine;