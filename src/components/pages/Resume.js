import React from 'react';
import downloadResume from "../images/downloadResume.svg";
import github_icon from "../images/github_icon.svg";
import "../styles.css";
import resumeDoc from "../images/Resume Jessica Daley.docx";
import {
    Box,
    Center,
    Text,
    Stack,
    List,
    Link,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';


export default function Resume() {
    return (


        <Center py={2}>
        
            <Box
              
                maxW={'330px'}
                w={'50rem'}
                mr="10px"
                bg={useColorModeValue('primary.100', 'primary.100')}
                boxShadow="dark-lg"
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('primary.100', 'primary.100')}
                    align={'center'}>
                    <Text
                        fontSize={'md'}
                        fontWeight={500}
                        className="gradient"
                        p={2}
                        px={5}
                        color={'white'}
                        rounded={'full'}>
                        Front-End Skills and Technologies
                    </Text>
                </Stack>
                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={7} py={10}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            JavaScript
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            HTML
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            CSS
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            React
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            AJAX
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            jQuery
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Multer s3
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Bootstrap
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Bulma
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Chakra UI
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Adobe Photoshop
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            GIMP
                        </ListItem>
                    </List>
                    <Link>
                        <a href="https://github.com/JessicaLDaley"><img className="contactImg2" src={github_icon} alt="github icon" /></a>
                    </Link>
                </Box>
            </Box>
          
            <Box
            mt="5px"
                maxW={'330px'}
                w='50rem'
                ml="20rem"
                bg={useColorModeValue('primary.100', 'primary.100')}
                boxShadow="dark-lg"
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('primary.100', 'primary.100')}
                    align={'center'}>
                    <Text
                        fontSize={'md'}
                        fontWeight={500}
                        className="gradient"
                        p={2}
                        px={5}
                        color={'white'}
                        rounded={'full'}>
                        Back-End Skills and Technologies
                    </Text>
                </Stack>
                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={7} py={10}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Node.js
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Express.js
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            MySQL
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Sequelize
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            MongoDB
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Mongoose
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Heroku
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            MongoDB Atlas
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Insomnia
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.400" />
                            Jest
                        </ListItem>
                    </List>
                    <Button   
          
        
            top= "0"
            right= "0"
            mt="10"
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>Download My Resume <a className="resumeLink" href={resumeDoc} target="_blank" rel="noreferrer"><img width="15rem"  className="downloadResume" src={downloadResume} alt="download icon" />
            </a></Button>
                </Box>
            </Box>
    
        </Center>
    );
}
