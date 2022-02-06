import { createContext, useState } from "react";

export const ServicoContext = createContext([])

export const ServicoProvider =({children}) => {
    const [servicos, setServicos] = useState([])

    const createServico = (novoServico) => {
        setServicos([...servicos,novoServico])
        
    }
    
    const deletServicos = (removeServico) => {
        const delServico = servicos.filter((serv) => serv.item !== removeServico.item)
        setServicos(delServico)
    }


     return(
         <ServicoContext.Provider value={{
            servicos,
            createServico,
            deletServicos,
            setServicos
         }}>
             {children}
         </ServicoContext.Provider>
     )
}


