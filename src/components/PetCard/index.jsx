import { useContext } from "react"
import { PetContext } from "../../Providers/NovoPet"

const PetCard = () => {

    const {pet, deletePet} = useContext(PetContext)

    
        return(
            <>
             <div>
                 <ul>
                     {pet.map((pets) => (
                         <li key={pets.name}>
                            <button onClick={() => deletePet(pets)}>X</button>
                            <strong>{pets.name}</strong>
                            <p>idade: {pets.idade}</p>
                            <span>Peso: {pets.peso}</span>
                            <p> Sexo: {pets.sexo}</p>
                         </li>
                     ))}
                 </ul>
             </div>
            </>
        )
}

export default PetCard