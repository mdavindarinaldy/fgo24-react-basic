import React from "react";

function PlusMinus() {
    let [value, setNumber] = React.useState(0)
    function minus(value) {
        if (value>0) {
            setNumber(value-1)
        } else {
            setNumber(value)
        }
    }
    function plus(value) {
        if (value<10) {
            setNumber(value+1) 
        } else {
            setNumber(value)
        }
    }
    return (
        <div>
            <button onClick={function(){minus(value)}} type="button">-</button>
            <div>{value}</div>
            <button onClick={function(){plus(value)}} type="button">+</button>
        </div>
    )
}

export default PlusMinus