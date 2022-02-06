import { createContext, useState } from "react";

export const PetServicoContext = createContext([]);

export const PetServicoProvider = ({children}) => {
    const [petServico, setPetServico] = useState([]);

    const createPetServico = (novoPet) => {
        setPetServico([...petServico,novoPet])
    }

    const deletPetServico = (removePet) => {
        const deletPetServico = petServico.filter((pets) => pets.numero !== removePet.numero)
        setPetServico(deletPetServico)
    }

    return(
        <PetServicoContext.Provider value={{
            petServico,
            setPetServico,
            deletPetServico,
            createPetServico
        }}>
            {children}
        </PetServicoContext.Provider>
    )
}