import { useForm } from 'react-hook-form';

// import { PetContext } from '../../Providers/NovoPet';


const AnimalCard = () => {


    // const { createPet } = PetContext;

    const {
        register,
        handleSubmit,
    } = useForm()


    const onSubmit = (data) => {
        // createPet(data)
        console.log(data)
        alert('PetZinho Cadastrado com sucesso')
    }

    return(
        <>
      
        <div>
            <h3>Qual o seu PET</h3>
            <form onSubmit={handleSubmit(onSubmit)}>

            <label>Nome:
               <input placeholder='Digite o nome do PET'
                    pattern="[a-z-A-Z\s]+$"
                    {...register('name')}/>  
            </label>
           
            
            <label>Idade:
                 <input placeholder='Digite a Idade'
                    {...register('idade')}/>
            </label>
           
            
            <label>Peso:
                 <select {...register('peso')}>
                <option value=''>selecione...</option>
                <option value={'0kg - 10kg'}>0kg - 10kg</option>
                <option value={'11kg - 25kg'}>11kg - 25kg</option>
                <option value={'26kg - 35kg'}>26kg - 35kg</option>
            </select>
            </label>
           

            <label>Sexo:
                <select {...register('sexo')}>
                <option value='feminino'>feminino</option>
                <option value='masculino'>masculino</option>
            </select>
            </label>
            
        
            <button type='submit'>Adicionar</button>   
            </form> 
        </div>  
        
        {/* <div>
            <ul>
                {pet.map((index,pets) => (<li key={index}>
                    {pets.name}
                    {pets.idade}
                    {pets.peso}
                    {pets.sexo}
                </li>))}
            </ul>
        </div> */}
        </>
    )
}
export default AnimalCard;