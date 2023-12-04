import react, {useEffect} from 'react';

const CompA=() =>{

    useEffect(() =>{
      //Effect goes here
      console.log('Effect goes here');
       const timerId = setInterval(() =>{
        console.log('API call executed')
       },2000);

      return() =>{
        //Cleanup goes here
        console.log('Cleanup goes here');
        clearInterval(timerId);
      }
    },[]); 
     
    return(
        <div>
            <p>component A</p>
            <hr />  
        </div>
    ) 
};

export default CompA;