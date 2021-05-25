import React, { useEffect } from 'react'
import { useIsAdmin } from '../../hooks/useIsAdmin';
// import '../styles/index.css';

const ExampleComponent = ({myCredential, children}) => {

    const { verifyAdmin, verifyTypeOfUser } = useIsAdmin();

    useEffect(() => {
        verifyTypeOfUser(myCredential)
    }, [])

    return (
        <>
        <div>
            {
                !!verifyAdmin ? 'Hola Administrador'
                : 'Tienes permisos limitados'
            }
        </div>
<div className='box'>
            {children}
</div>
</>
    )
}

export default ExampleComponent
