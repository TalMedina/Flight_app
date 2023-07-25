import React from 'react'
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s


function Flights(props) {

    const {flights} = useContext(flight);

  return (
    <div style={{border: '1px solid'}}>
        <p> Flight number : {flights[props.index].flightNum} </p>
        <p> Flight company : {flights[props.index].airline} </p>
        <p> Flight passengers : {flights[props.index].passengers} </p>
    </div>
  )
}

export default Flights