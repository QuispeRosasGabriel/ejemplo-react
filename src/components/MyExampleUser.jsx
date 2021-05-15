import React from 'react'

const MyExampleUser = ({addressUser, travelUser, ...restProps}) => {
    const {name, lastname, age, city, isWorking} = restProps
    console.log('restprop', restProps)
    console.log(name, lastname, age, city, isWorking);

    return (
        <div>
           ESTE ES UN EJEMPLo 
        </div>
    )
}

export default MyExampleUser
