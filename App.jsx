
import React, { useState } from 'react';
import './App.css';

const App = () =>{
  const [result, setResult]= useState("");

  const handleClick = (e) =>{
    e.preventDefault(); // Prevent form submission
    setResult(result.concat(e.target.textContent));
  }
  const clear = () =>{
 setResult("");
  }
  const backSpace = ()=> {
    setResult(result.slice(0,-1));
  }
 const calculate =()=>{
  try{
 setResult(eval(result).toString());
  }
  catch (err){
setResult("Error")
  }
 }
  

   

  return(
    <>
    <div className="heading"><h1>CALCULATOR APP</h1></div>
    <div className="container">
      <form>
        <input type="text" value={result}/>
      </form>
      <div className="btn">
        <button className ='clear' onClick={clear}>Clear</button>
        <button className ='operator' onClick={handleClick}  name='/'>/</button>
        <button className ='operator' onClick={handleClick} name='*'>*</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button className='operator' onClick={handleClick} name='-'>-</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button className='operator' onClick={handleClick} name='+'>+</button>
        <button className='one' onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button className='operator' onClick={handleClick} name='%'>%</button>
        <button className='equals' onClick={calculate}>=</button>
        <button className='zero' onClick={handleClick}>0</button>
        <button className='operator' onClick={backSpace}>DEL</button>
        <button className='operator' onClick={handleClick}>.</button>
        
      </div>
    </div>
    </>
  )
}
export default App;