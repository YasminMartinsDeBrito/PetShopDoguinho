import { AnimalProvider } from "./Animais";

const Providers = ({ children }) => {
  return (
    <AnimalProvider>
      {children}
    </AnimalProvider>
  );
};
export default Providers;
