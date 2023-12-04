import React,{useState,useMemo} from "react";
 

const Counter=() =>{
    const[number,setNumber]=useState(1);

    const factorialOf = (n) => {
        console.log('inside factorialOf method ' + n);
        let result=1;
        if(n <=1){
            return result;
        }else{
            for(let i=n;i >=1;i--){
                result=result * i;
            }
            console.log(result)
            return result;
        }
    }

   //const factorial=factorialOf(number);
      const factorial= useMemo(() =>{
        console.log("inside use memo");
       return  factorialOf(number)
    },[number]);


    return(
        <div>
            <p>Find the factorial of the given number</p>
            <input type="text" placeholder="Enter the number" onChange={(e) => {setNumber(e.target.value)}} />
            <br />
            <span>Factrial of the given number is {factorial} </span>        
            </div>
    )
}

export default Counter;
