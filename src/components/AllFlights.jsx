import React from 'react'
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s
import Flights from './Flights';
import { useNavigate } from 'react-router-dom';

function AllFlights() {

    const nav = useNavigate();

    const {flights} = useContext(flight);

  return (
    <div style={{display:'flex'}}>
        <div style={{display:'flex' , flexDirection: 'column'  }} >
        <button onClick={() => {nav('/controll_panel')}} >All flights</button>
        <button onClick={() => {nav('/controll_panel/sort')}} >Sort flights</button>
        <button onClick={() => {nav('/controll_panel/add')}} >Add flight</button>
        <button onClick={() => {nav('/controll_panel/delete')}} >Delete flight</button>
      </div>
        {flights.map((val,index) => {
        return <Flights index={index} />
      })}

      <button onClick={() => {nav('/control_page')}}>go home</button>
      </div>
  )
}

export default AllFlights