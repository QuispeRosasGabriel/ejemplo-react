import React, {useEffect, useState} from 'react'

const UseEffectExample = () => {
    const [name, setName] = useState('');
    const [isStarting, setIsStarting] = useState(false)
    useEffect(() => {
        setIsStarting(true)
    }, [])

    useEffect(() => {
        console.log('Use Effect Example', name)
    }, [name])

    const handleSetName = (ev) => {
        const newName = ev.currentTarget.value;
        setName(newName)
    }
    
    return (
        <div>
            {!!isStarting && <p>Bienvenido</p>}
            <label>Nombre:</label>
            <input type="text" value={name} onChange={(ev) => handleSetName(ev)} />
        </div>
    )
}

export default UseEffectExample
