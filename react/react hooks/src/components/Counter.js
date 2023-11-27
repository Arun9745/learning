import React,{useState,useEffect} from "react";
 
const counter = () =>{
    const[count,setCount]=useState(0);
    const[msg,setMsg]=useState('Initial message');

    useEffect(() =>{
        console.log('compund mounted/ updated');
        console.log(msg);
        console.log('count is increased to',count);
    })

return(
    <div>
        <button onClick={() =>{setCount(count+1)}}>Increase</button>
        <p>The count is :{count}</p>
        <button onClick={() =>{setMsg('msg updated on click event')}}>update message</button>
    </div>
)
};

export default Counter;
