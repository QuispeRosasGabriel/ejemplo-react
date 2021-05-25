import React, { useContext, useEffect } from 'react'
import { UserListContext } from '../context/UserListContext'
import CardFruit from './CardFruit'

const FruitsList = () => {
    
    const {myFruits} = useContext(UserListContext)
    
    useEffect(() => {
        console.log(myFruits)
    }, [])

    return (
        <div>
            <CardFruit />
        </div>
    )
}

export default FruitsList
