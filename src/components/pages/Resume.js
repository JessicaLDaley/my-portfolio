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
    IconButton,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    GridItem,
    Grid
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { BsGithub} from 'react-icons/bs';

export default function Resume() {
    return (
        <Text>
        <div class = "vertical4"></div>
        <div class = "vertical3"></div>
      
<Center>
 
        <Grid className="row1" templateColumns='repeat(2, 1fr)' >
        <Stack>
          <GridItem justify={["center", "space-between", "flex-end", "flex-end"]}py={9}>
           <Box
              className="card-w"
                maxW={'full'}
                w={'30rem'}
               ml="40rem"
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
                    textAlign="center"
                        fontSize={'xl'}
                        fontWeight={500}
                        className="gradient"
                        p={1}
                        px={10}
                        color={'white'}
                        rounded={'full'}>
                        Front-End Skills and Technologies
                    </Text>
                    
                </Stack>
                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={7} py={10}>
                    <List fontSize="lg" textAlign={'left'} ml="10rem"spacing={3}>
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
                    </Box>
                    <Stack
                   
                    p={6}
                    color={useColorModeValue('primary.100', 'primary.100')}
                    align={'right'}>
                    <Text
                     textAlign={'center'}
                        fontSize={'xl'}
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
                    <List  fontSize="lg"  textAlign={'left'} ml="10rem" spacing={3}>
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
         
        ml="4rem"
         mb="1"
         mt="10"
         className="resumebtn"
          bg={'green.400'}
          color={'white'}
          rounded={'xl'}
          boxShadow="dark-lg"
          _hover={{
            bg: 'green.500',
          }}
          _focus={{
            bg: 'green.500',
          }}><Text mr="1">Download My Resume</Text> <a className="resumeLink" href={resumeDoc} target="_blank" rel="noreferrer"><img width="17rem"  className="downloadResume" src={downloadResume} alt="download icon" />
          </a></Button>
          <a href="https://github.com/JessicaLDaley">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      mb="3"
                      mt="9"
                      float="left"
                      color="primary.100"
                      isRound={true}
                      _hover={{ bg: 'primary.400' }}
                      icon={<BsGithub  size="43px"/> }
                      /></a>
             
                </Box>
            </Box>

          
                   
                   
            
    
          
            </GridItem>
            </Stack>

     
          
          
      
       
        </Grid>
       
        </Center>
        </Text>
        
    
            
           
    );
}
