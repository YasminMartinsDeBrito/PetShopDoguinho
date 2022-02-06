import { AnimalProvider } from "./Animais";
import { EnderecoProvider } from "./NovoEndereco";
import { PetProvider } from "./NovoPet";
import { ServicoProvider } from "./NovoServico";
import { PetServicoProvider } from "./PetServicos";


const Providers = ({ children }) => {
  return (
    <EnderecoProvider>
      <ServicoProvider>
        <PetProvider>
      <PetServicoProvider>
        <AnimalProvider>
          {children}
        </AnimalProvider>
      </PetServicoProvider>
      </PetProvider>
      </ServicoProvider>
    </EnderecoProvider>
   
  );
};
export default Providers;
