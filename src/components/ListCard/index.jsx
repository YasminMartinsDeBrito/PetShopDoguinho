import { useContext } from "react";

import { AnimalContext } from "../../Providers/Animais";

import { Container } from "./style";

const ListCard = () => {
  const { animais } = useContext(AnimalContext);

  return (
    <Container>
      <ul>
        {animais.map((item, index) => (
          <li key={index}>
            <figure>
               <img src={item.img} alt={item.name} />
               <figcaption>{item.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default ListCard;
