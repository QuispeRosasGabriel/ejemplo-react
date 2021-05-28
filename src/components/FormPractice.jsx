import React, { useEffect, useState } from 'react'

const FormPractice = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(undefined);
    const [error, setError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [dniError, setDniError] = useState(false);
    const [dni, setDni] = useState(undefined);
    useEffect(() => {
        if (name === 'pepe') {
            setError(true);
        } else {
            setError(false);
        }
    }, [name]);

    useEffect(() => {
        if(age < 18) {
            setAgeError(true);
        } else {
            setAgeError(false);
        }
    }, [age])

    useEffect(() => {
        if(dni?.length < 7) {
            console.log('aca')
            setDniError(true)
        } else {
            setDniError(false)
        }
    }, [dni])

    useEffect(() => {
        fetch('https://swapi.py4e.com/api/people/')
            .then((res) => res.json())
            .then(console.log)

    }, [])

    const handleChangeName = (ev) => setName(ev.currentTarget.value);
    const handleChangeAge = (ev) => {
        console.log(ev)
        setAge(ev.currentTarget.value);}
    const handleChangeDni = (ev) => {
        console.log(ev.currentTarget.value)
        setDni(ev.currentTarget.value);}
        
    const onSubmitData = () => console.log('enviado')
    return (
        <div>
            <label>Coloca tu nombre: </label>
            <input type="text" value={name} onChange={(ev) => handleChangeName(ev)} />
            {!!error && <p style={{ color: 'red' }}>Nombre no valido</p>}
            <br />
            <label>Coloca tu edad: </label>
            <input type="text" value={age} onChange={(ev) => handleChangeAge(ev)} />
            {ageError && <p style={{color:'red'}}>No es mayor de edad</p>}
            <br />
            <label>Coloca tu DNI: </label>
            <input type="text" value={dni} onChange={(ev) => handleChangeDni(ev)} />
            {dniError && <p style={{color:'red'}}>DNI no valido, es muy corto</p>}
            <br />
            <button disabled={error} onClick={() => onSubmitData()}>Enviar</button>
        </div>
    )
}

export default FormPractice
