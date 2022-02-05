import { createContext,useState } from "react";

export const EnderecoContext = createContext([]);

export const EnderecoProvider = ({ children }) => {
     const [endereco, setEndereco] = useState([])


     const createEndereco = (novoEndereco) => {
        
        setEndereco([...endereco, novoEndereco])
     }

     const deleteEndereco = (removeEndereco) => {
          const delEndereco = endereco.filter((enderecos) => enderecos.number !== removeEndereco.number)
          setEndereco(delEndereco)
     }

     return(
         <EnderecoContext.Provider value={{
            endereco,
            setEndereco,
            createEndereco,
            deleteEndereco,
         }}>
             {children}
         </EnderecoContext.Provider>
     )
}
   