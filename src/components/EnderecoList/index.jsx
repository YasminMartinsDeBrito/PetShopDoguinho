import { useContext } from "react";
import { EnderecoContext } from "../../Providers/NovoEndereco";

const EnderecoList = () => {

    const { endereco,deleteEndereco} = useContext(EnderecoContext)
    return(
        <>
            <div>
                <ul>
                    {endereco.map((item) => (<li key={item.cep}>
                        {item.cep}
                        {item.rua}
                        {item.numero}
                        {item.bairro}
                        {item.cidade}
                        {item.estado}
                        <button onClick={deleteEndereco}>Remover</button>
                    </li>))}
                </ul>
            </div>
        </>
    )
}

export default EnderecoList