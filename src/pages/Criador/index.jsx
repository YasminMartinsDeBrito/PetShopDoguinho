import doguinho from '../../assets/img/doguinho.png';
import { Divs,P,Img, Span } from './styles';

const Criador = () => {

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
            
        </main>
        </>
    )
}
export default Criador