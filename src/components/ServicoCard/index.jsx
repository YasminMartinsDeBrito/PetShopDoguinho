import { useForm } from "react-hook-form"
import React from 'react'
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
    Text
  } from '@chakra-ui/react'

  import { useContext } from "react"
  import { GiShower } from 'react-icons/gi'

  import { ServicoContext } from "../../Providers/NovoServico"

const ServicoCard = () => {

    const { servicos,
        createServico,
        deletServicos,
        setServicos } = useContext(ServicoContext);

        const {
            register,
            handleSubmit,
        } = useForm()

        const onSumit = (data) => {
            createServico(data)
        }
            const { isOpen, onOpen, onClose } = useDisclosure()
          
            return (
              <>
                <Text >
                    Escolha o Serviço
                <Icon 
                as={GiShower}
                border='1px solid #000'
                cursor='pointer'
                fontSize='40px'
                ml='20px'
                mt='10px'
                onClick={onOpen}/>
                </Text>
               
          
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                >
                    <Center>

                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Escolha seu Mimo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl as='form' onSubmit={handleSubmit(onSumit)}>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                      </FormControl>
          
                      <FormControl mt={4}>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
                      </FormControl>
                    </ModalBody>
          
                    <ModalFooter>
                      <Button colorScheme='blue' mr={3}>
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                    </Center>
                </Modal>
              </>
            )
 }
export default ServicoCard