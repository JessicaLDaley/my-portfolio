import React from "react";
import "../styles.css";
import pep from "../images/pep.jpg"
import budget from "../images/budget.jpg"
import moviefoodie from "../images/moviefoodie.jpg"
import quiz from "../images/quiz.jpg"
import weather from "../images/weather.jpg"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  Link,
  Image,
  Flex,
  Grid,
  GridItem
} from '@chakra-ui/react';




export default function blogPostWithImage() {
  return (
    
    <Grid className="row2" templateRows='repeat(1, 1fr)' >
    <Stack>
      <GridItem className="card-marg1">
        <Center justify={["left",  "flex-end", "flex-end"]}py={1}>
          <Flex  className="work">
            <Box
              className="card-size"
              // maxW={'500px'}
              // maxH={'800px'}
              justifyContent="fill"
              w={'full'}
            
              boxShadow="dark-lg"
              rounded={'md'}
              mt="1"
              mb="1"
              p={5}
              overflow={'hidden'}>
              <Box
                maxH={'300px'}
                mt={-6}
                mx={-6}
                mb={3}
                pos={'relative'}>
                <a href="https://traveltribe.herokuapp.com/">
                  <Image
                    src={"https://source.unsplash.com/collection/959652/800x600" 

                    } alt="Travel group"
                    layout={'fill'}
                  /></a>
              </Box>
              <Stack>
                <h4
                  className="title"
                  fontFamily={'Courier New, monospace;'}>
                  Travel Tribe
                </h4>
                <Text color={'black'}  fontFamily={'Courier New, monospace;'}>
                  MongoDB, Express, Node.js, React, Chakra
                </Text>
              </Stack>
              <Stack mt={2} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'lg'}>
                  <Text  fontFamily={'Courier New, monospace;'}fontWeight={600}>Jessica Daley</Text>
                  <Link href="https://github.com/JessicaLDaley/TravelTribe"><Text  fontFamily={'Courier New, monospace;'} fontSize="20px" fontWeight={600} color="primary.900">View on GitHub</Text>
                    <ExternalLinkIcon font-size="20px" color="primary.900" mx='2px'/></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>
 
   
    {/* work #2 */}
   
   
<Stack className="responsive">
      <GridItem className="card-marg2">
        <Center className="card2" justify={["center", "flex-end", "flex-end"]}py={9}>
          <Flex className="work" >
            <Box
            className="card-size"
              // maxW={'390px'}
              // maxH={'800px'} 
              ml={4}
              w={'full'}
              bg='white, black'
              boxShadow="dark-lg"
              rounded={'md'}
              p={6}
              ml={1}
              mr={1}
              mt="-8"
             
              overflow={'hidden'}>
              <Box
                maxH={'300px'}
                bg={'primary.200'}
                mt={-6}
                mx={-6}
                mb={2}
                pos={'relative'}>
                <a href="https://michellewehr.github.io/MovieFoodie/">
                  <Image
                    src={moviefoodie

                    } alt="Couple in a movie theater"
                    layout={'fill'}

                  /></a>
              </Box>
              <Stack>
                <h4
                  className="title"
                  p="{-2}"
                  color='primary.100, white'
                  fontFamily={'Courier New, monospace'}>
                  Movie Foodie
                </h4>
                <Text fontFamily={'Courier New, monospace;'} color="primary.900"color={'black'}>
                  HTML, CSS, JavaScript, Bulma, TMDB API
                </Text>
              </Stack>
              <Stack mt={1} direction={'row'} spacing={4} align={'center'}>
                <Avatar className="avatar"
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'lg'}>
                  <Text fontFamily={'Courier New, monospace;'} fontWeight={600}>Jessica Daley</Text>
                  <Link href="https://github.com/JessicaLDaley/MovieFoodie"><Text fontFamily={'Courier New, monospace;'} fontSize="20px" fontWeight={600}  color="primary.900">View on GitHub</Text>
                    <ExternalLinkIcon font-size="20px"color="primary.900" mx='2px' /></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>
   
    {/* work #3 */}
    <Stack className="responsive">
      <GridItem className="card-marg3">
        <Center className="card3" justify={["right",  "flex-end", "flex-end"]}py={8}>
          <Flex className="work">
            <Box
            className="card-size"
              // maxW={'380px'}
              // maxH={'800px'}
              w={'full'}
              bg='#ecf5f1, black'
              boxShadow="dark-lg"
              rounded={'md'}
              p={5}
              ml={"1"}
              mr={'1'}
              mt="-7"
              overflow={'hidden'}>
              <Box
                className='margin'
                maxH={'330px'}
                bg={'primary.200'}
                mr={'1rem'}
                mt={-12}
                mx={-5}
                mb={2}
                pos={'relative'}>
                <a href={"https://glacial-plains-14244.herokuapp.com/"}>
                  <Image
                    src={
                      pep
                    }
                    layout={'fill'}
                  /></a>
              </Box>
              <Stack>
                <h4
                  className="title"
                  color='primary.100, white'
                  fontFamily={'Courier New, monospace'}
                >
                  PepWeb
                </h4>
                <Text fontFamily={'Courier New, monospace;'}  color={'black'}>
                  MySQL, Express, Node.JS, Multer-s3, Handlebars
                </Text>
              </Stack>
              <Stack mt={1} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'lg'}>
                  <Text fontFamily={'Courier New, monospace;'} fontWeight={600}>Jessica Daley</Text>
                  <Link color="primary.900" href="https://github.com/JessicaLDaley/PepWeb"><Text fontFamily={'Courier New, monospace;'} fontSize="20px" fontWeight={600}  color="primary.900">View on GitHub</Text>
                    <ExternalLinkIcon font-size="20px" mx='2px' color="primary.900" /></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>
    
{/* work #4 */}
<Stack className="responsive">
      <GridItem className="card-marg2">
        <Center className="card6" justify={["right",  "flex-end", "flex-end"]}py={8}>
          <Flex className="work">
            <Box
            className="card-size"
              // maxW={'400px'}
              // maxH={'800px'}
              w={'full'}
              bg='#ecf5f1, black'
              boxShadow="dark-lg"
              rounded={'md'}
              p={5}
              ml={"1"}
              mr={'1'}
              mt="-8"
              overflow={'hidden'}>
              <Box
                className='margin'
                maxH={'312px'}
                bg={'primary.200'}
                mr={'1rem'}
                mt={-12}
                mx={-5}
                mb={3}
                pos={'relative'}>
                <a href={"https://jessicaldaley.github.io/weather-dashboard/"}>
                  <Image
                    src={
                      weather
                    }
                    layout={'fill'}
                  /></a>
              </Box>
              <Stack>
                <h4
                  className="title"
                  color='primary.100, white'
                  fontFamily={'Courier New, monospace'}
                  >
                  Weather Dashboard
                </h4>
                <Text fontFamily={'Courier New, monospace;'}  color={'black'}>
               HTML, CSS, JavaScript, Open Weather API
                </Text>
              </Stack>
              <Stack mt={-2} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'lg'}>
                  <Text fontFamily={'Courier New, monospace;'} fontWeight={600}>Jessica Daley</Text>
                  <Link color="primary.900" href="https://jessicaldaley.github.io/weather-dashboard/"><Text fontFamily={'Courier New, monospace;'} fontSize="20px" fontWeight={600} color="primary.900">View on GitHub</Text>
                    <ExternalLinkIcon font-size="20px" mx='2px' color="primary.900" /></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>
      {/* work #5 */}
      <Stack className="responsive">
      <GridItem className="card-marg3">
        <Center justify={["center",  "flex-end", "flex-end"]}py={12}>
          <Flex className="work">
            <Box
          
              // maxW={'380px'}
              // maxH={'870px'}
              w={'full'}
              bg='white, primary.200'
              boxShadow="dark-lg"
              rounded={'md'}
              p={4}
              ml={"4px"}
              mr="-1rem"
              mt="-16"
              overflow={'hidden'}>
              <Box
                className='margin'
                maxH={'330px'}
                bg={'primary.200'}
                mr={'1rem'}
                mt={-10}
                mx={-5}
                mb={2}
                pos={'relative'}>
                <a href={"https://budge-travel-tracker.herokuapp.com/"}>
                  <Image
                    src={
                      budget
                    }
                    layout={'fill'}
                  /></a>
              </Box>
              <Stack>
                <h4
                  className="title"
                  color='primary.100, white'
                  fontFamily={'Courier New, monospace'}
                >
                  Budget Tracker
                </h4>
                <Text fontFamily={'Courier New, monospace;'}  color={'black'} pb="2" >
                  Node.js, Express.js, JavaScript, HTML, CSS
                </Text>
              </Stack>
              <Stack mt={-1} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'lg'}>
                  <Text fontFamily={'Courier New, monospace;'} mb="1" fontWeight={600}>Jessica Daley</Text>
                  <Link fontFamily={'Courier New, monospace;'}  color="primary.900" href="https://github.com/JessicaLDaley/budget-tracker-PWA"><Text className="git-weight" mb="-2" fontSize="20px" fontWeight={600} color="primary.900">View on GitHub</Text>
                    <ExternalLinkIcon  mb="-2" font-size="20px"mx='1px' color="primary.900" /></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>
    {/* work #6 */}
    <Stack className="responsive">
      <GridItem className="card-marg1">
        <Center justify={["center",  "flex-end", "flex-end"]}py={12}>
          <Flex className="work">
            <Box
            className="card-size"
              // maxW={'400px'}
              // maxH={'800px'}
              w={'full'}
              bg='white, primary.200'
              boxShadow="dark-lg"
              rounded={'md'}
              p={4}
              ml={"1"}
              mr={'1'}
              mt="-16"
              mb="-5"
             overflow={'hidden'}>
              <Box
                className='margin'
                maxH={'300px'}
                bg={'primary.200'}
                mr={'1rem'}
                mt={-5}
                mx={-5}
                mb={3}
                pos={'relative'}>
                <a href={"https://github.com/JessicaLDaley/SQL-Employee-Tracker"}>
                  <Image
                    src={
                      quiz
                    }
                    layout={'fill'}
                  /></a>
              </Box>
              <Stack>
                <h4
                  className="title"
                  color='primary.100, white'
                  fontFamily={'Courier New, monospace'}
                >
                  JavaScript Quiz
                </h4>
                <Text fontFamily={'Courier New, monospace;'}  color={'black'}>
                  MySQL, Express, Node.JS
                </Text>
              </Stack>
              <Stack mt={2} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'lg'}>
                  <Text fontFamily={'Courier New, monospace;'} mt="2" fontWeight={600}>Jessica Daley</Text>
                  <Link fontFamily={'Courier New, monospace;'}  color="primary.900" href="https://github.com/JessicaLDaley/SQL-Employee-Tracker"><Text fontSize="20px" fontWeight={600}  color="primary.900">View on GitHub</Text>
                    <ExternalLinkIcon mb="3" font-size="20px"mx='2px' color="primary.900" /></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>


  
   

   

  </Grid>
 







);
}


