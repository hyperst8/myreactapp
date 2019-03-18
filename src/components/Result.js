import React from 'react';

const Result = (props) => {
    // console.log(props);
    return ( 
        <div className="u-full-width result">
            <h2>Resultat:</h2>
            <p>Lånebeløp: Kr {props.amount}</p>
            <p>Nedbetalingstid: {props.term} måneder</p>
            <p>Total lån og renter: Kr {props.total}</p>
            <p>Månedlig termin: Kr { (props.total / props.term).toFixed(2) }</p>
        </div>
     );
}
 
export default Result;