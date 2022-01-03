import { AnimalProvider } from "./Animais";
import { PetProvider } from "./NovoPet";


const Providers = ({ children }) => {
  return (
    <PetProvider>
      <AnimalProvider>
        {children}
      </AnimalProvider>
    </PetProvider>
   
  );
};
export default Providers;
