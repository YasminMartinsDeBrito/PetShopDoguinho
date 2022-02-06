import { useForm } from "react-hook-form";
import { useContext } from "react";
import { PetContext } from "../../Providers/NovoPet";
import { MdPets } from "react-icons/md";

import {
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  FormLabel,
  Text,
  Select,
  Center,
} from "@chakra-ui/react";

const AnimalCard = () => {
  const { createPet } = useContext(PetContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    createPet(data);
    console.log(data);
    alert("PetZinho Cadastrado com sucesso");
  };

  return (
    <>
      <div>
        <Text>
          Qual o seu PET
          <Icon as={MdPets} 
          cursor="pointer" 
          fontSize="40px" 
          onClick={onOpen} />
        </Text>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent
            m="0 auto"
            display="flex"
            alignItems="center"
            mt="100px"
            h="350px"
            w="300px"
            borderRadius="10px"
            backgroundColor="#f8f9fa"
          >
            <ModalHeader
              display="flex"
              justifyContent="space-between"
              borderRadius="10px 10px 0 0"
              p="7px"
              w="96.9%"
            >
              Adicione seu Pet
              <ModalCloseButton
                width="40px"
                bg="transparent"
                border="none"
                cursor="pointer"
              />
            </ModalHeader>
            <FormControl mt="20px" as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormLabel>
                Nome:
                <input
                  placeholder="Digite o nome do PET"
                  pattern="[a-z-A-Z\s]+$"
                  {...register("name")}
                />
              </FormLabel>

              <FormLabel>
                Idade:
                <input placeholder="Digite a Idade" {...register("idade")} />
              </FormLabel>

              <FormLabel>
                Peso:
                <Select {...register("peso")}>
                  <option value="">selecione...</option>
                  <option value={"0kg - 10kg"}>0kg - 10kg</option>
                  <option value={"11kg - 25kg"}>11kg - 25kg</option>
                  <option value={"26kg - 35kg"}>26kg - 35kg</option>
                </Select>
              </FormLabel>

              <FormLabel>
                Sexo:
                <Select {...register("sexo")}>
                  <option value="feminino">feminino</option>
                  <option value="masculino">masculino</option>
                </Select>
              </FormLabel>

              <ModalFooter mt="80px" display="flex" justifyContent="center">
                <Button
                  border="none"
                  bg="#606C38"
                  borderRadius="6px"
                  p="6px"
                  type="submit"
                  color="#fff"
                  cursor="pointer"
                >
                  Adicionar
                </Button>
              </ModalFooter>
            </FormControl>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
export default AnimalCard;
