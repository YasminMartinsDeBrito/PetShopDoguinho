import { createContext, useState } from "react";

export const UtilitsContext = createContext();

export const UtilitsProvider = ({ children }) => {
    const [modal,setModal] = useState(false)

    return(
        <UtilitsContext.Provider value={{modal,setModal}}>
            {children}
        </UtilitsContext.Provider>
    )
}