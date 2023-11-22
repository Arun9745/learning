

const Apple = (props) => {

        const{appleinfo}= props;
        const{color,type}=appleinfo;
        return(
            <h2>I am {color} {type} apple</h2>
        )
    

}

export default Apple