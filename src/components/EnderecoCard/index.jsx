import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { RiMapPinUserLine } from "react-icons/ri";
import { EnderecoContext } from "../../Providers/NovoEndereco";
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
  Box
} from "@chakra-ui/react";

const EnderecoCard = () => {
  const { createEndereco } = useContext(EnderecoContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (data) => {
    createEndereco(data);
    console.log(data);
    alert("Endereco cadastrado");
  };

  function checkCep(e) {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("rua", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("estado", data.uf);
        setFocus("numero");
      });
  }

  return (
    <>
      <Box bg=''>
      <Text>
        Seu Endereço
        <Icon
          display="flex"
          as={RiMapPinUserLine}
          cursor="pointer"
          fontSize="40px"
          onClick={onOpen}
        ></Icon>
      </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          m="0 auto"
          display="flex"
          alignItems="center"
          mt="100px"
          h="500px"
          w="300px"
          borderRadius="10px"
          backgroundColor="#606C38"
        >
          <ModalHeader
            display="flex"
            justifyContent="space-between"
            borderRadius="10px 10px 0 0"
            p="7px"
            w="96%"
          >
            Adicione seu Endereço
          </ModalHeader>
          <ModalCloseButton
            width="40px"
            bg="transparent"
            border="none"
            cursor="pointer"
          />
          <ModalBody pb={6} display="flex" justifyContent="center">
            <FormControl
              mt="20px"
              w="200px"
              as="form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormLabel>
                CEP
                <Input
                  placeholder="Digite o CEP"
                  {...register("cep")}
                  onBlur={checkCep}
                />
              </FormLabel>

              <FormLabel>
                Rua
                <Input
                  placeholder="Rua"
                  type="text"
                  {...register("rua")}
                  disabled
                />
              </FormLabel>

              <FormLabel>
                Numero
                <Input
                  placeholder="Numero"
                  type="text"
                  {...register("numero")}
                />
              </FormLabel>

              <FormLabel>
                Bairro
                <Input
                  placeholder="Bairro"
                  type="text"
                  {...register("bairro")}
                  disabled
                />
              </FormLabel>

              <FormLabel>
                Cidade
                <Input
                  placeholder="Cidade"
                  type="text"
                  {...register("cidade")}
                  disabled
                />
              </FormLabel>

              <FormLabel>
                Estado
                <Input
                  placeholder="Estado"
                  type="text"
                  {...register("estado")}
                  disabled
                />
              </FormLabel>

              <ModalFooter mt="20px" display="flex" justifyContent="center">
                <Button
                  border="none"
                  bg="#000"
                  borderRadius="6px"
                  p="6px"
                  color="#fff"
                  type="submit"
                  cursor="pointer"
                >
                  Enviar
                </Button>
              </ModalFooter>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default EnderecoCard;
