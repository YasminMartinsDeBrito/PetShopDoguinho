import AnimalCard from "../../components/AnimalCard";
import EnderecoCard from "../../components/EnderecoCard";
import PetCard from "../../components/PetCard";

import doguinho from '../../assets/img/doguinho.png';
import { Divs,P,Img, Span } from './styles';


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
            <EnderecoCard/>
            <br/>
            <AnimalCard/>

            <PetCard/>
        </main>
        
        </>
    )
}
export default Dashboard