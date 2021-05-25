import React, { createContext, useEffect, useState } from 'react'

export const CarsListContext = createContext();

const CarsListProvider = ({children}) => {

    const [luxuryCars, setLuxuryCars] = useState([]);

    useEffect(() => {
        setLuxuryCars([
            'Mazda',
            'Ferrari',
            'BMW'
        ])
    }, [])

    return (
        <CarsListContext.Provider
        value={{luxuryCars}}
        >
            {children}
        </CarsListContext.Provider>
    )
}

export default CarsListProvider
