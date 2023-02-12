import React from "react";
function Die(props){
    const styles = {
        backgroundColor:props.isHeld ? '#59E391':'white'
    }
    return(
        <p className='Tile1' style={styles} onClick={props.holdDice}>{props.value}</p>
    )
}

export default Die;