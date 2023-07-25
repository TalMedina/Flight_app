import './App.css';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { flight } from './contextApi';
import HomePage from './components/HomePage';
import ControlPage from './components/ControlPage';
import DeleteFlight from './components/DeleteFlight';
import AddFlight from './components/AddFlight';
import SortFlights from './components/SortFlights';
import AllFlights from './components/AllFlights';

function App() {

  const [flights,setFlights]=useState([{flightNum:123,airline:'tal airlines',passengers:430},{flightNum:124,airline:'niv airlines',passengers:400},{flightNum:128,airline:'tal airlines',passengers:330},{flightNum:143,airline:'kobi airlines',passengers:150},{flightNum:823,airline:'alona airlines',passengers:300}])

  const [homePageValidationCode,setHomePageValidationCode]=useState(0)
  const [flightNum,setFlightNum]=useState(0)
  const [airline,setAirline]=useState('')
  const [passengers,setPassengers]=useState(0)

  const [sortBy,setSortBy]=useState('')
  const [sortedArr,setSortedArr]=useState([])

  const [serch,setSerch]=useState('')
  const [serchedFlight,setSerchedFlight]=useState([])
  const [showIndex,setShowIndex]=useState([])

  // console.log(sortBy);
  
  
  return (
    
    <div className="App" style={{backgroundColor:'lightgray'}} >

      <flight.Provider value={{showIndex,setShowIndex,serchedFlight,setSerchedFlight,serch,setSerch,sortedArr,setSortedArr,sortBy,setSortBy,passengers,setPassengers,airline,setAirline,flightNum,setFlightNum,flights,setFlights,homePageValidationCode,setHomePageValidationCode}}>
        
        <BrowserRouter>
         
          <Routes>
          
            <Route path="/" element={<HomePage/>} />
            <Route path="/control_page" element={<ControlPage/>} />
            <Route path="/controll_panel" element={<AllFlights/>} />
            <Route path='/controll_panel/sort' element={<SortFlights/>} />
            <Route path='/controll_panel/add' element={<AddFlight/>} />
            <Route path='/controll_panel/delete' element={<DeleteFlight/>} />

              {/* <Route path="/controllPanel" element={<ControllPanel/> } />
              <Route path="/controllPanel/sort" element={<Sort/>} />
              <Route path="/controllPanel/add" element={<AddFlight/>} />
              <Route path="/controllPanel/delete" element={<DelFlight/>} /> */}

          </Routes>

        </BrowserRouter>

      </flight.Provider>

    </div>
  );
}

export default App;
