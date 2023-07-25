import React from 'react'
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s
import SerchedFlights from './SerchedFlights';
import SortedFlights from './SortedFlights';


function SortFlights() {

    const {showIndex,setShowIndex,serchedFlight,setSerchedFlight,serch,setSerch,sortedArr,setSortedArr,sortBy,setSortBy,flights} = useContext(flight);

    const sort = () => {

        let sortedPassengersArr = []
        let flightsArr = flights

        for (let i = 0; i < flights.length; i++) {
            sortedPassengersArr.push(flights[i].passengers) 
        }
        if (sortBy == 'most seats avadeble') {
            sortedPassengersArr.sort();
            sortedFlights(sortedPassengersArr,flightsArr)
        }
        if (sortBy == 'least seats avadeble') {
            sortedPassengersArr.sort()
            sortedPassengersArr.reverse()
            sortedFlights(sortedPassengersArr,flightsArr)
        }
    }

    const sortedFlights = (sortedPassengersArr,flightsArr) => {

        let finalArr = []
        
        for (let i = 0; i < sortedPassengersArr.length; i++) {
            const amountOfPassengers = sortedPassengersArr[i];

            for (let j = 0; j < flightsArr.length; j++) {
                const oneFlight = flightsArr[j];

                if (sortedPassengersArr[i] == flightsArr[j].passengers) {
                    finalArr.push(flightsArr[j])
                }
            }
        }

        setSortedArr(finalArr)

    }

    const serchCompName = () => {

        let input = serch
        let airlines = []
        let res = []
        let index = 0
        let final
            for (let i = 0; i < flights.length; i++) {
                airlines.push(flights[i].airline)
            }

            for (let i = 0; i < input.length; i++) {
                for (let j = 0; j < airlines.length; j++) {
                    if (airlines[j].includes(input)) {
                        index = j
                        res.push(flights[j])
                    }
                }
                
            }
            
            const delDuplicates = res => [...new Set(res)]
            final =  delDuplicates(res)
            setSerchedFlight(final)
            setShowIndex(index)
    }
    

    
  return (
    <div>
        <h3>serch by airline name</h3>
        <input onChange={(e) => {setSerch(e.target.value);serchCompName()}} type="text" />
        <div >
        {serchedFlight.map((val,index) => {
            if (serch != '') {
                return <SerchedFlights key={index} index={index} />
            }
        })}
        </div>
        <br />
        <select onChange={(e)=>{
        const chois = e.target.value
        setSortBy(chois)
    }}>
        <option>select seats amount</option>
        <option value={'most seats avadeble'} >most seats avadeble</option>
        <option value={'least seats avadeble'} >least seats avadeble</option>
    </select>
    <br />
    <button onClick={sort} >select</button>
    {sortedArr.map((val,index) => {
            return <SortedFlights key={index} index={index} />
          })}
          
    </div>
  )
}

export default SortFlights