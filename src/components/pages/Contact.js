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
          className="form-box"
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
                  <Heading className="contact-me" > Contact Me</Heading>

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

                    <a href="https://www.linkedin.com/in/jessica-daley-full-stack-developer/">
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        color="white"
                        isRound={false}
                        _hover={{ bg: 'primary.400' }}
                        icon={<BsLinkedin size="40px" />}
                      /></a>

                    <a href="mailto:jessicadaley127@gmail.com">
                      <IconButton
                        aria-label="email"
                        variant="ghost"
                        size="lg"
                        color="white"
                        isRound={false}
                        _hover={{ bg: 'primary.400' }}
                        icon={<MdEmail size="50px" />}
                      /></a>

                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>

                <Box boxShadow="dark-lg" bg="white" borderRadius="lg">
                  <Box className="form" height="50%" m={8} color="#0B0E3F">
                    <VStack spacing={8}>
                      <form action="https://formsubmit.co/jessicadaley127@gmail.com" method="POST">
                        <FormControl id="name">

                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement

                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input mb="1rem" type="text" name="name" size="md" required />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input mb="1rem" type="email" name="email" size="md" required />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            height="8rem"
                            mb="3rem"
                            name='message'
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="Message content"
                          />
                        </FormControl>

                        <FormControl id="name" float="right">

                          <Button
                            mt="-8"
                            type="submit"
                            variant="solid"
                            bg="green.400"
                            color="white"
                            pt="1"
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
                      </form>
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