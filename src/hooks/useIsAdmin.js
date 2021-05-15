import { useState } from "react";

export const useIsAdmin = () => {
  
    const [verifyAdmin, setVerifyAdmin] = useState(false);
  
    const verifyTypeOfUser = (credential) => {
        if(credential === 'admin') {
            setVerifyAdmin(true);
        }
    } 

    return {
        verifyAdmin,
        verifyTypeOfUser
    }
}