import { Button } from "@chakra-ui/react"
import { useContext } from "react"
import { ServicoContext } from "../../Providers/NovoServico"

const ListServicosPet = () => {

    const { servicos, deletServicos } = useContext(ServicoContext)
    return(
        <>
        <ul>
            {servicos.map((serv) => (<li key={serv.mimo}>
                {serv.mimo}{' '}
                {serv.pet}
                <Button onSubmit={() => deletServicos(serv.mimo)}>
                    delete
              </Button>
            </li>))}
        </ul>
        
        </>
    )

}

export default ListServicosPet