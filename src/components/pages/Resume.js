import React from 'react';
import "../styles.css";
import resumeDoc from "../images/Resume Jessica Daley.docx";
import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    GridItem,
    Grid
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';


export default function Resume() {
    return (
       
       
      
<Center>
 
        <Grid className="row1" templateColumns='repeat(2, 1fr)' >
        <Stack>
          <GridItem justify={["center", "space-between", "flex-end", "flex-end"]}py={9}>
           <Box
                className="card-w"
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
                        fontSize={'20px'}
                        fontWeight={500}
                        className="gradient"
                        p={1}
                        px={10}
                        color={'white'}
                        rounded={'full'}>
                        Skills and Technologies
                    </Text>
                    
                </Stack>
                <Box  bg="white"px={7} py={10}>
                    <List className="resume-list"fontSize="lg" textAlign={'left'} ml="8rem"spacing={3}>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            JavaScript
                        </ListItem>
                        <ListItem>     
                            <ListIcon as={CheckIcon} color="primary.900" />
                            HTML
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            CSS
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            React
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            AJAX
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            jQuery
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Multer s3
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Bootstrap
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Bulma
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Chakra UI  
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Adobe Photoshop
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            GIMP
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Node.js
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Express.js
                        </ListItem>
                        
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Heroku
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            MongoDB Atlas
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckIcon} color="primary.900" />
                            Insomnia
                        </ListItem>
                        
                        </List>
                   
                    <Button   
           variant="solid"
           mb="1"
           mt="9"
     
           pt="-1"
           width="55%"
           className="resumebtn"
           bg={'primary.100'}
           color="white"
           boxShadow="dark-lg"
           _hover={{
            bg:'green.400',
            color:"black"
          }}
          _focus={{
            bg:'green.400',
            color:"black"
            
          }}><a className="resumeLink" href={resumeDoc} target="_blank" rel="noreferrer"><h4>
            Download Resume</h4></a>
          </Button>
           
          
                    </Box>
                    
                  
                   </Box>
                  
                    
                   
       
            
    
          </GridItem>
            </Stack>

     
          
          
      
       
        </Grid>
        </Center>

        
    
            
           
    );
}
