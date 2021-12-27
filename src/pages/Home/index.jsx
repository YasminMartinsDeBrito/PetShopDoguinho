import { useHistory } from "react-router-dom";
import { Button, Img, Span,P , Divs, Main, Footer} from "./styles";
import doguinho from '../../assets/img/doguinho.png'
const Home = () => {
  const history = useHistory();

  return (
    <>
      <header>
        <Divs>
            <P>Mimo'<span>S</span></P>
            <Img src={doguinho} alt='doguinho'/>
            <Span>Pet Feliz</Span>
        </Divs>
        
      
        
       
        <Button onClick={() => history.push("/sobre")}><p>About</p></Button>
        <Button onClick={() => history.push("/criador")}><p>Criador</p></Button>
        <Button onClick={() => history.push("/foto")}><p>Fotos</p></Button>
        <Button onClick={() => history.push("/login")}><p>Login</p></Button>
        <Button onClick={() => history.push("/cadastro")}><p>Cadastro</p></Button>
    
      </header>
     
        

      <Main>
        <section>
          Aqui voce vera sobre
          <button onClick={() => history.push("/sobre")}>Sobre</button>
        </section>

        <section>
          Aqui voce vera o criador
          <button onClick={() => history.push("/criador")}>Criador</button>
        </section>

        <section>
          Aqui voce vera as fotos mais fofas do mundo
          <button onClick={() => history.push("/foto")}>Fotos</button>
        </section>
      </Main>
      <Footer>
        <p> esse site foi criado por{" "}
        <strong>Yasmin Martins de Brito Marcelino</strong> a fim de aperfeiçoar seus conhecimentos em <strong>React</strong></p>
      </Footer>
    </>
  );
};
export default Home;
