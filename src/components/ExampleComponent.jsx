import React, { useEffect } from 'react'
import { useIsAdmin } from '../hooks/useIsAdmin';

const ExampleComponent = ({myCredential}) => {

    const { verifyAdmin, verifyTypeOfUser } = useIsAdmin();

    useEffect(() => {
        verifyTypeOfUser(myCredential)
    }, [])

    return (
        <div>
            {
                !!verifyAdmin ? 'Hola Administrador'
                : 'Tienes permisos limitados'
            }
        </div>
    )
}

export default ExampleComponent
