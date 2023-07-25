import React from 'react'
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s

function DFlights(props) {

    const {flights,setFlights} = useContext(flight);

    const deleteFlight = (i) => {
        let newArr = flights.filter((val,index)=>(i != index))
        setFlights([...newArr])

    }

    return (
      <div style={{border: '1px solid'}}>
          <p> Flight number : {flights[props.index].flightNum} </p>
          <p> Flight company : {flights[props.index].airline} </p>
          <p> Flight passengers : {flights[props.index].passengers} </p>
          <button onClick={()=>{deleteFlight(props.index)}} >Delete</button>
      </div>
    )
}


export default DFlights