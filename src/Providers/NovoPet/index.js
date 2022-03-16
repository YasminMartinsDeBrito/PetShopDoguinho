import { createContext,useState } from "react";

export const PetContext = createContext([]);

export const PetProvider = ({ children }) => {
     const [pet, setPet] = useState([])


     const createPet = (novoPet) => {
        setPet([...pet, novoPet])
     }

     const deletePet = (removePet) => {
          const delPet = pet.filter((pets) => pets.numero !== removePet.numero)
          setPet(delPet)
     }

     return(
         <PetContext.Provider value={{
            pet,
            setPet,
            createPet,
            deletePet,
         }}>
             {children}
         </PetContext.Provider>
     )
}
   