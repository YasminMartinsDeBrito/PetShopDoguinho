import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <header>
        <button onClick={() => history.push("/sobre")}>Sobre</button>
        <button onClick={() => history.push("/criador")}>Criador</button>
        <button onClick={() => history.push("/foto")}>Fotos</button>
        <button onClick={() => history.push("/login")}>Login</button>
        <button onClick={() => history.push("/cadastro")}>Cadastro</button>
      </header>

      <main>
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
      </main>
      <footer>
        <p> esse site foi criado por{" "}
        <strong>Yasmin Martins de Brito Marcelino</strong> a fim de aperfeiçoar seus conhecimentos em <strong>React</strong></p>
      </footer>
    </>
  );
};
export default Home;
