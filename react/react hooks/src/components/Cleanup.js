import React,{useState} from "react";
 import CompA from "./CompA";

const Cleanup=() =>{
    const[toggle,setToggle]=useState(true);
    return(
        <div>
            <p>useEffect with Cleanup</p>
            <button onClick={()=>{setToggle(!toggle)}}>show/hide compA</button>
            {toggle ? <CompA />: null}
        </div>
    )
}

export default Cleanup;
