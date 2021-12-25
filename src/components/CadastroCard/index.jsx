import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';
const CadastroCard = () => {
    const history = useHistory()

    const schema = yup.object().shape({
        name: yup.string()
        .required('Nome obrigatório'),

        email: yup.string()
        .required('Email obrigatório')
        .email('Email Inválido'),

        senha: yup.string()
        .min(6,'Minimo 6 digitos')
        .required('Senha Obrigatória'),
        
        confirme_senha: yup.string()
        .oneOf([yup.ref('senha')], 'As senhas precisam ser iguais'),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitCadastro = (data) => {
        console.log(data)
        alert('Cadastrado com sucesso')
        history.push('/login')
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit(onSubmitCadastro)}>
                <input placeholder='Digite seu nome'
                pattern="[a-z-A-Z\s]+$"
                {...register('name')}/>
                <span>{errors.name?.message}</span>

                <input placeholder='Digite seu email'
                {...register('email')}/>
                <span>{errors.email?.message}</span>

                <input placeholder='Digite sua senha'
                {...register('senha')}/>
                <span>{errors.senha?.message}</span>

                <input placeholder='Digite sua senha'
                {...register('confirme_senha')}/>
                <span>{errors.confirme_senha?.message}</span>

                <button type='submit'>Cadastrar</button>
            </form>
            <div>
                <h4>Já possue cadastro? Faça Login</h4>
                <button onSubmit={() => history.push('/login')}>Logar</button>
            </div>
                
        </div>
        
        </>
    )

}

export default CadastroCard