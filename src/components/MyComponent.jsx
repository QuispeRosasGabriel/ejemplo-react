import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const MyComponent = ({isAdmin = true, user = 'Pedro', handleClick, handleChangeEmail }) => {

   const {getItemFromLocalStorage, setItemFromLocalStorage} = useLocalStorage();

   const handleSeeLng = () => {
        const myLng = getItemFromLocalStorage('lng');
        alert(myLng)
    }

    const handleChangeLng = () => setItemFromLocalStorage('lng', 'en');
    

    return (
        <div>
            {
                !!isAdmin && <p>
                    Mi encabezado - Saludos
                </p>

            }
            <p>Hola {user} como estas?</p>
            <input type="text" name="" id=""
            placeholder='correo'
            onChange={(ev) => handleChangeEmail(ev)}
            />
            <button onClick={(ev) => handleClick('Diste click y descubriste el boton')}>Dame 1 Click 😀</button>
            <button onClick={() => handleSeeLng()}>Mira el lenguaje</button>
            <button onClick={() => handleChangeLng()}>Prefiero el ingles</button>
        </div>
    )
}

export default MyComponent
