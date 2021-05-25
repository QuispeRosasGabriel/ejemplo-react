import React, { createContext, useEffect, useState } from 'react'

export const UserListContext = createContext();

const myFruits = [
    {
        name: 'Manzana',
        color: 'Roja'
    },
    {
        name: 'Platano',
        color: 'Amarillo'
    }
]

const UserListProvider = ({children}) => {
    const [userList, setUserList] = useState([]);
    
    useEffect(() => {
        setUserList([
            'Mario',
            'Luis',
            'Juan'
        ]);
    }, []);


    return (
        <UserListContext.Provider
          value={{
            userList,
            myFruits
          }}
        >
          {children}
        </UserListContext.Provider>
      );
}

export default UserListProvider
