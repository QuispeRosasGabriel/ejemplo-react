import React, { useContext } from 'react'
import { CarsListContext } from '../context/CarsListContext'

const Cars = () => {

    const {luxuryCars} = useContext(CarsListContext);


    return (
        <>
          {luxuryCars.map((luxuryCar, idx) => (
              <div key={idx}>{luxuryCar}</div>
          ))}  
        </>
    )
}

export default Cars
