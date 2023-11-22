import Apple from './Apple';
import Car from './Car'


function Garage() {
    const carinfo={color: "red",brand:"ford"};
    const appleinfo={color: "green",type:"fruit"};
    return(
        <>
        <h1>Who lives inside my Garage </h1>
        <Car carinfo={carinfo} />
        <Apple appleinfo={appleinfo} />
        </>
    );
}

export default Garage