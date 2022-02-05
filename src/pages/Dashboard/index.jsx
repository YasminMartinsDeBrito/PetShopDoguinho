import AnimalCard from "../../components/AnimalCard";
import EnderecoCard from "../../components/EnderecoCard";
import PetCard from "../../components/PetCard";
import ServicoCard from "../../components/ServicoCard";

import doguinho from '../../assets/img/doguinho.png';
import { Divs,P,Img, Span } from './styles';
import EnderecoList from "../../components/EnderecoList";


const Dashboard = () => {

    return(
        <>
        <header>
                <Divs>
                    <P>Mimo'<span>S</span></P>
                    <Img src={doguinho} alt='doguinho'/>
                    <Span>Pet Feliz</Span>
                </Divs>
        </header>

        <main>
            {/* endereco das pessoas */}
            <EnderecoCard/>
            <br/>
            <EnderecoList/>

         {/*  Adicionar animal  */}
            <br/>
            <AnimalCard/>

            {/* Mostrar Animal adicionado */}
            <PetCard/>
            <br/>

            {/* Escolhendo o servico para o pet */}
            <ServicoCard/>
        </main>
        
        </>
    )
}
export default Dashboard