import React from "react";
import "../styles.css";
import {
  Container,
  Flex,
  Box,
  Heading,
  Link,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image
} from '@chakra-ui/react';
import {
  MdEmail,

  MdLinkedin,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsLinkedin, BsPerson } from 'react-icons/bs';
import profile_pic from "../images/Me.jpg"

function Contact(props) {
  return (
    <Container border-style="outset" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg=" background: rgb(9,9,9);
          background: linear-gradient(135deg, rgba(9,9,9,1) 0%, rgba(41,39,39,1) 34%, rgba(213,212,212,1) 100%); "
          color="white"
          boxShadow="dark-lg"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box className="contact-head">
                  <Heading className="contact-me" font-family="sans-serif"> Contact Me</Heading>

                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Image mt="28px" ml="50px" width="8rem" className="profile-contact" src={profile_pic} alt="profile"></Image>

                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">

                    <a href="https://github.com/JessicaLDaley">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        color="white"
                        isRound={true}
                        _hover={{ bg: 'primary.400' }}
                        icon={<BsGithub size="43px" />}
                      /></a>


                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      color="white"
                      isRound={false}
                      _hover={{ bg: 'primary.400' }}
                      icon={<BsLinkedin size="40px" />}
                    />
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      color="white"
                      isRound={false}
                      _hover={{ bg: 'primary.400' }}
                      icon={<MdEmail size="50px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box boxShadow="dark-lg" bg="white" borderRadius="lg">
                  <Box className="form" m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="green.400"
                          color="white"
                          boxShadow="dark-lg"
                          _hover={{
                            bg: 'green.500',
                          }}
                          _focus={{
                            bg: 'green.500',
                          }}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}


export default Contact;