import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s
import Flights from './Flights';

function ControlPage() {

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
        return <Flights key={index} index={index} />
      })}

    </div>
  )
}

export default ControlPage