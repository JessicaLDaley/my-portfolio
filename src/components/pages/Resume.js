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
                        Skills and Technologies
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
                        
                    </List>
                   
                    
                    <Button   
         
         ml="7rem"
          mb="1"
          mt="10"
          pt="1"
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
           }}><a className="resumeLink" href={resumeDoc} target="_blank" rel="noreferrer"><Text color="white">Download My Resume</Text> 
           </a></Button>
                    </Box>
                    
                  
                   </Box>
                  
                    
                   
       
            
    
          </GridItem>
            </Stack>

     
          
          
      
       
        </Grid>
        </Center>
  </Text>
        
    
            
           
    );
}
