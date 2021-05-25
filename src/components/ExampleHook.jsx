import {useState, useEffect, useContext} from 'react';
import { UserListContext } from '../context/UserListContext';

const ExampleHook = () => {

    const [name, setName] = useState('JOSE');
    const [lastname, setLastname] = useState('');
        
    const {userList} = useContext(UserListContext)

    useEffect(() => {
        console.log('USE EFFECT FUNCIONANDO', userList)
    }, [])

    const handleChangeName = (e) => {
        const newName = e.target.value;
        setName(newName)
    }

    const handleChangeLastName = (e) => {
        const newLastName = e.target.value;
        setLastname(newLastName)
    }

    return (
        <div>
            HOLA EXAMPLE HOOK - {name}
            <input type="text" value={name} onChange={(e) => handleChangeName(e)} />
            <input type="text" value={lastname} onChange={(e) => handleChangeLastName(e)} />
        </div>
    )
}

export default ExampleHook;
