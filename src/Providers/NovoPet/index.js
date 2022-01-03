import { createContext,useState } from "react";

export const PetContext = createContext([]);

export const PetProvider = ({ children }) => {
     const [pet, setPet] = useState([])


     const createPet = (novoPet) => {
        setPet([...pet, novoPet])
     }

     const deletePet = (removePet) => {
            pet.filter((pets) => pets.name !== removePet)
     }

     return(
         <PetProvider.Proviver value={{
            pet,
            setPet,
            createPet,
            deletePet,
         }}>
             {children}
         </PetProvider.Proviver>
     )
}
   