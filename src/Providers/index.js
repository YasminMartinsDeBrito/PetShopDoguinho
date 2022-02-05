import { AnimalProvider } from "./Animais";
import { EnderecoProvider } from "./NovoEndereco";
import { PetProvider } from "./NovoPet";


const Providers = ({ children }) => {
  return (
    <EnderecoProvider>
      <PetProvider>
        <AnimalProvider>
          {children}
        </AnimalProvider>
      </PetProvider>
    </EnderecoProvider>
   
  );
};
export default Providers;
