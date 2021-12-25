import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';
const LoginCard = () => {
    const history = useHistory()


    const schema = yup.object().shape({
        name: yup.string()
        .required('Nome obrigatório'),

        senha: yup.string()
        .required('Senha obrigatória')
    })

    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitLogin = (data) => {
       
         console.log(data)
         history.push('/user')
       
    }

    return(
        <>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <input placeholder='Digite seu Nome'
                    pattern="[a-z-A-Z\s]+$"
                    {...register('name')}/>
                    <span>{errors.name?.message}</span>

                    <input placeholder='Digite sua Senha'
                    type='password'
                    {...register('senha')}/>
                    <span>{errors.senha?.message}</span>

                    <button type='submit'>Logar</button>
                </form>

                <div>
                    <h4>Ainda não fez o cadastro? Cadastre-se</h4>
                    <button onSubmit={() => history.push('/cadastro')}>Logar</button>
                </div>
            </div>
        </>
    )
}
export default LoginCard