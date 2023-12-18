import React,{useState} from "react"
/*import CustomerView from "./CustomerView";*/
import { addCustomer as addCustomerAction } from "../Slice/CustomerSlice";
import { useDispatch } from "react-redux";

export default function Customer() {
    const [input,setInput] = useState("");
    const dispatch=useDispatch();
    //const [customers,setCustomers] = useState([]);

    function addCustomer() {
        if (input){
           //setCustomers((previousState) => [...previousState, input])
           dispatch(addCustomerAction(input))
           setInput("");
        }
    }

    return <>
    <div>
        <h3>Add new Customer</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} 
        />
        <button onClick={addCustomer}>Add</button>
    </div>
      
    </> 
}                

