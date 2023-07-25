import React from 'react'
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s
import { useNavigate } from 'react-router-dom';


function AddFlight() {

    const nav = useNavigate();


    const {flights,setFlights,counter,setCounter,passengers,setPassengers,airline,setAirline,flightNum,setFlightNum} = useContext(flight);


    const check = () => {

        let counter = 0

        for (let i = 0; i < flights.length; i++) {
            if (flights[i].flightNum == flightNum) {
                counter++
            alert('Flight exsists')
            }
        }
        if (counter == 0) {
            checkFlightDitails()
        }
    }

    const checkFlightDitails = () => {

        let counter = 0

        if (flightNum.length > 6) {
            counter++
            alert('Flight num longer then expected')
        }
        if (airline.length < 1) {
            counter++
            alert('Airline must be at least 1 key')
        }
        if (passengers < 1 || passengers > 450) {
            counter++
            alert('Passengers mst be between 1 - 450')
        }
        else {
            AddFlight(counter)
        }
    }

    const AddFlight = (counter) => {
        if (counter == 0) {
            setFlights([...flights,{flightNum,airline,passengers}])
            nav('/controll_panel')
        }

    }
    


  return (
    <div style={{display:'flex'}} >
        <div style={{display:'flex' , flexDirection: 'column'  }} >
        <button onClick={() => {nav('/controll_panel')}} >All flights</button>
        <button onClick={() => {nav('/controll_panel/sort')}} >Sort flights</button>
        <button onClick={() => {nav('/controll_panel/add')}} >Add flight</button>
        <button onClick={() => {nav('/controll_panel/delete')}} >Delete flight</button>
      </div>

        <div style={{paddingLeft: '100px'}} >
        <h1>Add new flight</h1>
        <p><input onChange={(e) => {setFlightNum(e.target.value)}} type="number" placeholder='Enter flight number' />
        <br />
        <p1 style={{fontSize: '50%'}} >* flight num need to be between 1 - 5</p1>
        </p>
        <p>
        <input onChange={(e) => {setAirline(e.target.value)}} type="text" placeholder='Enter airline' />
        <br />
        <p1 style={{fontSize: '50%'}} >* Airline must be at least 1 key</p1>
        </p>
        <p>
        <input onChange={(e) => {setPassengers(e.target.value)}} type="text" placeholder='Enter passengers amount' />
        <br />
        <p1 style={{fontSize: '50%'}} >* Passengers need to be between 1 - 450</p1>
        </p>
        <button onClick={check} >cerate</button>
        </div>
    </div>
  )
}

export default AddFlight