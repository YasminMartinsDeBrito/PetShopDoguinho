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
                            {pets.name}
                            {pets.idade}
                            {pets.peso}
                            {pets.sexo}
                            <button onClick={() => deletePet(pets)}>Remover</button>
                         </li>
                     ))}
                 </ul>
             </div>
            </>
        )
}

export default PetCard