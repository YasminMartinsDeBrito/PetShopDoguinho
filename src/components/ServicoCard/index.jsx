import { useForm } from "react-hook-form";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Button,
  FormLabel,
  Input,
  Center,
  Icon,
  Text,
  RadioGroup,
  Stack,
  Radio,
  Select,
  Box,
} from "@chakra-ui/react";

import { useContext } from "react";
import { GiShower } from "react-icons/gi";

import { ServicoContext } from "../../Providers/NovoServico";
import { PetContext } from "../../Providers/NovoPet";
// import { PetServicoContext } from "../../Providers/PetServicos";

const ServicoCard = () => {
  const { servicos, createServico, deletServicos, setServicos } =
    useContext(ServicoContext);

  const { pet } = useContext(PetContext)

  // const { createPetServico } = useContext(PetServicoContext)

  const { register, handleSubmit } = useForm();

  const onService = (data) => {
    createServico(data);
    console.log(data);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text>
        Escolha o Serviço
        <Icon as={GiShower} cursor="pointer" fontSize="40px" onClick={onOpen} />
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <Center>
          <ModalOverlay />
          <ModalContent
            m="0 auto"
            display="flex"
            alignItems="center"
            mt="100px"
            h="200px"
            w="200px"
            borderRadius="10px"
            backgroundColor="#f8f9fa"
          >
            <ModalHeader
              display="flex"
              justifyContent="space-between"
              borderRadius="10px 10px 0 0"
              p="7px"
              w="96.9%"
              mt='15px'
            >
              Escolha seu Mimo
            </ModalHeader>
            <ModalCloseButton
              width="40px"
              bg="transparent"
              border="none"
              cursor="pointer"
              mb='20px'
            />

              <FormControl as="form" onSubmit={handleSubmit(onService )}>
                <FormLabel>Pacotes</FormLabel>
                <Select {...register('mimo')}>
                    <option value='mensal'>Mensal</option>
                    <option value='semanal'>Semanal</option>
                </Select>

                <Select {...register('pet')}>
                  {pet.map((pets) => (
                    <option value={pets.name}>{pets.name}</option>
                  ))}
                  
             
                  
                </Select>
                 
              <ModalFooter mt='25px' display='flex' justifyContent='space-between'>

              <Button type='submit'>
                Save
              </Button>
              
              </ModalFooter>
              </FormControl>

          </ModalContent>
        </Center>
      </Modal>
    </>
  );
};
export default ServicoCard;
