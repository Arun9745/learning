import Apple from './Apple';
import Car from './Car'


function Garage() {
    const carinfo={color: "red",brand:"ford"};
    const appleinfo={color: "green",type:"fruit"};
    const dooropened=false;
    const carlist=[
        {brand: "BMW" ,color: "Red"},
        {brand: "Ford" ,color: "White"},
        {brand: "Tesla" ,color: "blue"},
    ]
    const numberlist=[1,2,3,4,5,6];
    //const carinfo={}
    return(
        <>
        <h1>Who lives inside my Garage </h1>
        {carinfo.brand !== undefined && carinfo.brand !==undefined ?
        <Car carinfo={carinfo} /> : null}
        <Apple appleinfo={appleinfo} />
        {dooropened?<h2> The door is opened</h2>: <h2> The door is not opened</h2>}
        <ul>
            { carlist.map((carinfo) =><li><Car carinfo={carinfo}/>  </li>)}
                </ul>
                <ul>{
                numberlist.map((e,index)=> <p key={index}>{e}</p>)}</ul>
        </>
    );
}

export default Garage