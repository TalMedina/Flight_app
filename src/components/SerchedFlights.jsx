import React from 'react'
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s


function SerchedFlights(props) {

    const {showIndex,serchedFlight,flights} = useContext(flight);



  return (
    <div style={{border: '1px solid'}}>
        <p> Flight number : {serchedFlight[props.index].flightNum} </p>
        <p> Flight company : {serchedFlight[props.index].airline} </p>
        <p> Flight passengers : {serchedFlight[props.index].passengers} </p>
    </div>
  )
}

export default SerchedFlights