import AnimalCard from "../../components/AnimalCard";
import EnderecoCard from "../../components/EnderecoCard";
import PetCard from "../../components/PetCard";
import ServicoCard from "../../components/ServicoCard";

import doguinho from '../../assets/img/doguinho.png';
import { Divs,P,Img, Span } from './styles';
import EnderecoList from "../../components/EnderecoList";

import { Container } from "@chakra-ui/react";
import ListServicosPet from "../../components/ListServicosPet/ListSevicosPet";


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
            <Container>

            {/* adicionar endereco das pessoas */}
            <EnderecoCard/>
            <br/>
            {/*  Adicionar animal  */}
            <AnimalCard/>
            <br/>
            {/* Escolhendo o servico para o pet */}
            <ServicoCard/>
            </Container>


            {/* mostar na tela */}
            <Container>
            {/* Mostrar Animal adicionado */}
            <PetCard/>
            <br/>
            {/* Mostrar endereco acionado */}
            <EnderecoList/>
            {/* Mostar o seervico de cada pet */}

            <ListServicosPet/>
            </Container>

        </main>
        
        </>
    )
}
export default Dashboard