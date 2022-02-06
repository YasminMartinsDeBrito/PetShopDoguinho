import { useHistory } from "react-router-dom";
import doguinho from "../../assets/img/doguinho.png";
import { GiHamburgerMenu } from "react-icons/gi";
import alexandra from "../../assets/img/alexandra.jpg";
import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Box,
  useDisclosure,
  Icon,
  useMediaQuery,
  Text,
  Link,
  ListItem,
  ListIcon,
  List,
  Container,
  Button,
  Image,
  Divider,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [largura] = useMediaQuery("(min-width: 768px)");

  const history = useHistory();

  return (
    <>
      <header>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          margin="1px"
          width="-webkit-fill-available"
        >
          <Text
            fontSize="30px"
            float="right"
            fontWeight="600"
            color="#000"
            textShadow="-1px -3px 2px #FFF, 
              -3px 3px 5px #FFF,                    
               1px -3px 2px #FFF,                  
               1px 2px 5px #FFF"
            fontFamily="Shadows Into Light"
          >
            Mimo'
            <Text
              fontSize="25px"
              fontWeight="600"
              color="#ef233c"
              textShadow="-3px -3px 2px #FFF, 
               -3px 3px 5px #FFF,                    
                1px -3px 2px #FFF,                  
                1px 2px 5px #FFF"
              fontFamily="Shadows Into Light"
              as="cite"
            >
              S
            </Text>
          </Text>
          <Image width="110px" src={doguinho} alt="doguinho" />
          <Text
            fontSize="25px"
            fontWeight="600"
            textShadow="-3px -3px 2px #FFF, 
               -3px 3px 5px #FFF,                    
                1px -3px 2px #FFF,                  
                1px 2px 5px #FFF"
            fontFamily="Shadows Into Light"
            as="cite"
          >
            Pet Feliz
          </Text>
        </Box>

        {/*  Header No menu */}
        {largura ? (
          <>
            <Button
              p="5px 10px"
              mr="10px"
              border="none"
              bg="#606c38"
              borderRadius="8px"
              color="#fff"
              cursor="pointer"
              onClick={() => history.push("/sobre")}
            >
              <p>About</p>
            </Button>
            <Button
              p="5px 10px"
              mr="10px"
              border="none"
              bg="#606c38"
              borderRadius="8px"
              color="#fff"
              cursor="pointer"
              onClick={() => history.push("/criador")}
            >
              <p>Criador</p>
            </Button>
            <Button
              p="5px 10px"
              mr="10px"
              border="none"
              bg="#606c38"
              borderRadius="8px"
              color="#fff"
              cursor="pointer"
              onClick={() => history.push("/foto")}
            >
              <p>Fotos</p>
            </Button>
            <Button
              p="5px 10px"
              mr="10px"
              border="none"
              bg="#606c38"
              borderRadius="8px"
              color="#fff"
              cursor="pointer"
              onClick={() => history.push("/login")}
            >
              <p>Login</p>
            </Button>
            <Button
              p="5px 10px"
              mr="10px"
              border="none"
              bg="#606c38"
              borderRadius="8px"
              color="#fff"
              cursor="pointer"
              onClick={() => history.push("/cadastro")}
            >
              <p>Cadastro</p>
            </Button>
          </>
        ) : (
          <Icon mr="5px" fontSize="40px" as={GiHamburgerMenu} onClick={onOpen}>
            Create user
          </Icon>
        )}

        <Drawer isOpen={isOpen} onClose={onClose}>
          {/* <DrawerOverlay /> */}
          <DrawerContent
            display="flex"
            alignItems="center"
            h="350px"
            backgroundColor="#DDA15E"
          >
            <DrawerCloseButton
              mt="10px"
              border="none"
              p="10px 20px"
              borderRadius="8px"
              mb="10px"
            />
            <DrawerBody width="100px" fontSize="35px">
              <Button
                p="5px 10px"
                border="none"
                bg="transparent"
                borderRadius="8px"
                color="#fff"
                cursor="pointer"
                _hover={{ color: "#606c38" }}
                onClick={() => history.push("/sobre")}
              >
                <p>About</p>
              </Button>
              <Button
                p="5px 10px"
                border="none"
                bg="transparent"
                borderRadius="8px"
                color="#fff"
                cursor="pointer"
                _hover={{ color: "#606c38" }}
                onClick={() => history.push("/criador")}
              >
                <p>Criador</p>
              </Button>
              <Button
                p="5px 10px"
                border="none"
                bg="transparent"
                borderRadius="8px"
                color="#fff"
                cursor="pointer"
                _hover={{ color: "#606c38" }}
                onClick={() => history.push("/foto")}
              >
                <p>Fotos</p>
              </Button>
              <Button
                p="5px 10px"
                border="none"
                bg="transparent"
                borderRadius="8px"
                color="#fff"
                cursor="pointer"
                _hover={{ color: "#606c38" }}
                onClick={() => history.push("/login")}
              >
                <p>Login</p>
              </Button>
              <Button
                p="5px 10px"
                border="none"
                bg="transparent"
                borderRadius="8px"
                color="#fff"
                cursor="pointer"
                _hover={{ color: "#606c38" }}
                onClick={() => history.push("/cadastro")}
              >
                <p>Cadastro</p>
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </header>

      {/* MAIN */}

      <Container
        margin="0 5%"
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
      >
        {/* Box do SOBRE */}
        <Box h="300px">
          Banho e Tosa{" "}
          <Link
            href="https://www.instagram.com/banhoetosamimospetfeliz4/"
            isExternal
          >
            Mimo'S
          </Link>{" "}
          Pet Feliz O maior amor do mundo com seu pet ❤ 🙆🏽‍♀️ Groomer
          <Link href="https://www.instagram.com/alexandraedonizete/" isExternal>
            @Alexandra
          </Link>
          <br />
          <List spacing={4} mb="5px">
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#606C38" />
              🔸️Tosa higiênica
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#606C38" />
              🔸️Tosa bebê
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#606C38" />
              🔸️Tosa com tesoura
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#606C38" />
              🔸️Hidratação
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="#606C38" />
              🔸️Corte de unhas
            </ListItem>
          </List>
          <Button
            mt="15px"
            ml="40px"
            p="10px 20px"
            border="none"
            bg="#606c38"
            borderRadius="8px"
            cursor="pointer"
            color="#fff"
            onClick={() => history.push("/sobre")}
          >
            About
          </Button>
        </Box>

        <Divider orientation="horizontal" />

        {/* QUEM criou o Petshop */}
        <Box h="350px">
          <Text>
            Sou Alexandra , sempre gostei de animais e quiz me profissionalizar
            na area de PetShop, por que tem muito amor pelos animais. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Praesentium vero
            animi eius, explicabo molestias necessitatibus laudantium odio
            deleniti? Tenetur, eum est eius odio animi voluptatem autem eaque
            accusamus illum sequi!
          </Text>
          <Button
            p="10px 20px"
            border="none"
            bg="#606c38"
            borderRadius="8px"
            color="#fff"
            mb="55px"
            onClick={() => history.push("/criador")}
          >
            Criador
          </Button>
          <Image
            m="12% auto"
            borderRadius="50%"
            w="150px"
            h="150px"
            src={alexandra}
            alt="alexandra"
          />
        </Box>

        <Divider orientation="horizontal" />

        <Box h="300px" mt="55px">
          Aqui voce vera as fotos mais fofas do mundo, Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo quas alias fugit, dolor rerum
          modi maxime ipsum quae porro error facilis qui a voluptatem nostrum?
          Et aspernatur aliquid eveniet laborum?
          <Button
            ml="15px"
            p="10px 20px"
            border="none"
            bg="#606c38"
            borderRadius="8px"
            color="#fff"
            onClick={() => history.push("/foto")}
          >
            Fotos
          </Button>
        </Box>
      <Box h="100px">
        <Text>
          {" "}
          esse site foi criado por{" "}
          <strong>Yasmin Martins de Brito Marcelino</strong> a fim de
          aperfeiçoar seus conhecimentos em <strong>React</strong>
        </Text>
      </Box>
      </Container>
    </>
  );
};
export default Home;
