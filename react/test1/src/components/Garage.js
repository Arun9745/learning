import Apple from './Apple';
import Car from './Car'


function Garage() {
    const carinfo={color: "red",brand:"ford"};
    const appleinfo={color: "green",type:"fruit"};
    const dooropened=false;
    //const carinfo={}
    return(
        <>
        <h1>Who lives inside my Garage </h1>
        {carinfo.brand !== undefined && carinfo.brand !==undefined ?
        <Car carinfo={carinfo} /> : null}
        <Apple appleinfo={appleinfo} />
        {dooropened?<h2> The door is opened</h2>: <h2> The door is not opened</h2>}
        </>
    );
}

export default Garage