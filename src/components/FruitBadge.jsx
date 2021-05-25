import React, { useContext } from 'react'
import { UserListContext } from '../context/UserListContext'

const FruitBadge = () => {

    const {myFruits} = useContext(UserListContext)

    return (
        <div>
           FRUIT BADGE - {myFruits[0].color}
        </div>
    )
}

export default FruitBadge
