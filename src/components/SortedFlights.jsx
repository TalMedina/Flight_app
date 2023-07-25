import React from 'react'
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s


function SortedFlights(props) {

    const {sortedArr} = useContext(flight);

  return (
    <div style={{border: '1px solid'}}>
        <p> Flight number : {sortedArr[props.index].flightNum} </p>
        <p> Flight company : {sortedArr[props.index].airline} </p>
        <p> Flight passengers : {sortedArr[props.index].passengers} </p>
    </div>
  )
}

export default SortedFlights