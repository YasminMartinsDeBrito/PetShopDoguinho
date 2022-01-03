import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';

import doguinho from '../../assets/img/doguinho.png';
import { Divs,P,Img, Span, Main, Form, Div } from './style';

import imgLogin from '../../assets/img/doguinho.png';

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
         alert('Logado com sucesso')
         history.push('/user')
       
    }

    return(
        <>
            <header>
                <Divs>
                    <P>Mimo'<span>S</span></P>
                    <Img src={doguinho} alt='doguinho'/>
                    <Span>Pet Feliz</Span>
                </Divs>
            </header>

            <Main> 
                <img src={imgLogin} alt='doguinho'/>
                <Div>
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit(onSubmitLogin)}>
                        <input placeholder='Digite seu Nome'
                        pattern="[a-z-A-Z\s]+$"
                        {...register('name')}/>
                        <span>{errors.name?.message}</span>

                        <input placeholder='Digite sua Senha'
                        type='password'
                        {...register('senha')}/>
                        <span>{errors.senha?.message}</span>

                        <button type='submit'>Logar</button>
                        <div>
                            <h4>Ainda não fez o cadastro?</h4>
                            <button onSubmit={() => history.push('/cadastro')}>Cadastre-se</button>
                        </div>
                    </Form>

                    
                </Div>
               
            </Main>
        </>
    )
}
export default LoginCard