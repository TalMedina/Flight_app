import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';//
import { flight } from '../contextApi'; // s


function HomePage() {

    const nav = useNavigate();

    const {homePageValidationCode,setHomePageValidationCode} = useContext(flight);

    const checkHomePageValidationCode = () =>{
        if (homePageValidationCode == 12345) {
            nav('/control_page')
        }
        else {
            alert('Validation code not valid')
        }
    }



  return (
    <div>
        <h3>Enter Identification code</h3>
        <input onChange={(e) => {setHomePageValidationCode(e.target.value)}} type="text" />
        <button onClick={checkHomePageValidationCode} >Enter</button>

    </div>
  )
}

export default HomePage