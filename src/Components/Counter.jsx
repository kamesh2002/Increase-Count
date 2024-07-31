
import{useState} from "react";

function Counter() {
     const [count,setCount] = useState(5);
     const [error,setError] = useState(false);

     const[userInput,setUserInput] = useState(null);


    const handleIncrement =()=>{

        if(count>=10000){
            setError("Value should be less than 10")
           }
           else{
            setError(false);
            setCount(count + 1);
           }
        
        
    };
    const handleDecrement =()=>{
       if(count<=0){
         setError("Value should be less than 0")
        }
        else{
            setError(false)
            setCount(count-1);
        }
        
    };
    const handleSubmit = () =>{
        setCount(userInput*count)
    }

    const handleUserInput =(e)=> {
        setUserInput(e.target.value);

    };

  return (
    <div className='counter'>
      <h3 
      style={{
        color:"blue",
        backgroundColor:"black",
        padding:10,
        borderRadius:10,
    }}
      >
        {count}
        </h3>
      <div>
      <button onClick={handleDecrement} className='btn'>-</button>
      <button onClick={handleIncrement} className='btn'>+</button>
      </div>
      <input onChange={handleUserInput} style={{padding:10,borderRadius:10}}type="number"/>
      <button onClick={handleSubmit}className="btn">Submit</button>


      { error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default Counter;

