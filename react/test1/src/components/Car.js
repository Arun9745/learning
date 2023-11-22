function Car(props) {
    const {carinfo }=props
    const {color,brand}=carinfo;
    const text = `Hi,I am ${color} ${brand} Car`;
    return(
        <h2>{text}</h2>
    );
}

export default Car