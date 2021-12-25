import { createContext, useState } from "react";

export const AnimalContext = createContext([]);

export const AnimalProvider = ({ children }) => {
  const [animais, setAnimais] = useState([
    {name: 'Dorinha', img: "https://media.istockphoto.com/photos/yorkshire-terrier-with-cucumbers-on-her-eyes-at-grooming-salon-spa-picture-id1297804383?b=1&k=20&m=1297804383&s=170667a&w=0&h=4hE4b2rrFc5z3N-cf_6fh4RPig8nvx-3CqjlUDRebgY=" },
    {name: 'Milly', img: "https://media.istockphoto.com/photos/a-chinese-female-dog-groomer-grooming-a-cavalier-king-charles-spaniel-picture-id969077342?b=1&k=20&m=969077342&s=170667a&w=0&h=5mL9rZZcB5PpOUi0JI76wOh8ejQCtZipcnHpMqxxbCI=" },
    {name: 'Braão', img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk62174475-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=d8eadcf911547cc6bf4ca24175df6b48" },
    {name: 'Bob', img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61905400-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=1c246f61e44a18c4317e2a155a347d5e" },
    {name: 'Rex', img: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/wk73890611-image-kp6cgs8x.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=712669aea7260153bb36ff2a2779a305" },
    {name: 'Lulu', img: "https://lunapetshop.com.br/wp-content/uploads/2019/04/banho.jpg" },
    {name: 'Tommy', img: "https://www.ative.pet/wp-content/uploads/2020/12/original-cea330e3c460ef992af4841daeedd1f4-scaled-2560x1280.jpeg" },
  ]);

  return (
    <AnimalContext.Provider value={{ animais, setAnimais}}>
      {children}
    </AnimalContext.Provider>
  );
};

