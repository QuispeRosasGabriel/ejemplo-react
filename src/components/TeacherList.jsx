import React, { useContext } from 'react'
import { UserListContext } from '../context/UserListContext'

const TeacherList = () => {
    const {userList} = useContext(UserListContext)

    return (
        <ul>
           {
               userList.map((user,idx) => (
                   <li key={idx}>{user}</li>
               ))
           } 
        </ul>
    )
}

export default TeacherList
