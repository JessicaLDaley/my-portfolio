import React from "react";
import "../styles.css";
import pep from "../images/pep.jpg"
import moviefoodie from "../images/moviefoodie.jpg"
import tracker from "../images/tracker.png"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Heading,
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
    
    <Grid className="row2" templateRows='repeat(1, 1fr)' templateColumns='repeat(1, 1fr)' >
    <Stack>
      <GridItem>
        <Center justify={["left",  "flex-end", "flex-end"]}py={9}>
          <Flex className="work">
            <Box
              maxW={'350px'}
              maxH={'800px'}
              justifyContent="fill"
              w={'full'}
              ml={"1"}
              mr={"1"}
              bg='white, primary.200'
              boxShadow="dark-lg"
              rounded={'md'}
              mt="1"
              mb="1"
              p={5}
              overflow={'hidden'}>
              <Box
                maxH={'300px'}
                bg={'primary.200'}
                mt={-6}
                mx={-6}
                mb={2}
                pos={'relative'}>
                <a href="https://traveltribe.herokuapp.com/">
                  <Image
                    src={"https://source.unsplash.com/collection/959652/800x600"

                    }
                    layout={'fill'}
                  /></a>
              </Box>
              <Stack>
                <Heading
                  color='primary.100, white'
                  fontSize={'2xl'}
                  fontFamily={'body'}
                  mt="2">
                  Travel Tribe
                </Heading>
                <Text color={'primary.200'}>
                  MongoDB, Express, Node.js, React, Chakra
                </Text>
              </Stack>
              <Stack mt={2} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Jessica Daley</Text>
                  <Link href="https://github.com/JessicaLDaley/TravelTribe"><Text color="primary.400">View on GitHub</Text>
                    <ExternalLinkIcon color="primary.400" mx='2px' /></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>
 
    <div class = "vertical"></div>
    {/* work #2 */}
   
   
<Stack className="responsive">
      <GridItem className="marg-top">
        <Center justify={["center", "flex-end", "flex-end"]}py={3}>
          <Flex className="work" >
            <Box
              maxW={'350px'}
              maxH={'800px'} ml={4}
              w={'full'}
              bg='white, primary.200'
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
                mb={5}
                pos={'relative'}>
                <a href="https://michellewehr.github.io/MovieFoodie/">
                  <Image
                    src={moviefoodie

                    }
                    layout={'fill'}

                  /></a>
              </Box>
              <Stack>
                <Heading
                  color='primary.100, white'
                  fontSize={'2xl'}
                  fontFamily={'body'}
                  mb='-2'>
                  Movie Foodie
                </Heading>
                <Text color={'primary.200'}>
                  HTML, CSS, JavaScript, Bulma, TMDB API
                </Text>
              </Stack>
              <Stack mt={1} direction={'row'} spacing={4} align={'center'}>
                <Avatar className="avatar"
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Jessica Daley</Text>
                  <Link href="https://github.com/JessicaLDaley/MovieFoodie"><Text color="primary.400">View on GitHub</Text>
                    <ExternalLinkIcon color="primary.400" mx='2px' /></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>
    <div class = "vertical2"></div>
    {/* work #3 */}
    <Stack className="responsive">
      <GridItem>
        <Center justify={["right",  "flex-end", "flex-end"]}py={8}>
          <Flex className="work">
            <Box
              maxW={'350px'}
              maxH={'800px'}
              w={'full'}
              bg='white, primary.200'
              boxShadow="dark-lg"
              rounded={'md'}
              p={5}
              ml={"1"}
              mr={'1'}
              mt="-6"
              mb="1"
              overflow={'hidden'}>
              <Box
                className='margin'
                maxH={'300px'}
                bg={'primary.200'}
                mr={'1rem'}
                mt={-12}
                mx={-5}
                mb={1}
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
                <Heading
                  color='primary.100, white'
                  fontSize={'2xl'}
                  fontFamily={'body'}
                  mt='1'>
                  PepWeb
                </Heading>
                <Text color={'primary.200'}>
                  MySQL, Express, Node.JS, Multer-s3, Handlebars
                </Text>
              </Stack>
              <Stack mt={1} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Jessica Daley</Text>
                  <Link color="primary.400" href="https://github.com/JessicaLDaley/PepWeb"><Text color="primary.400">View on GitHub</Text>
                    <ExternalLinkIcon mx='2px' color="primary.400" /></Link>
                </Stack>
              </Stack>
            </Box>
          </Flex>
        </Center>
      </GridItem>
    </Stack>
    
{/* work #4 */}
    <Stack className="responsive">
      <GridItem className="marg-top">
        <Center justify={["center",  "flex-end", "flex-end"]}py={4}>
          <Flex className="work">
            <Box
              maxW={'350px'}
              maxH={'800px'}
              w={'full'}
              bg='white, primary.200'
              boxShadow="dark-lg"
              rounded={'md'}
              p={4}
              ml={"1"}
              mr={'1'}
              mt="-8"
             overflow={'hidden'}>
              <Box
                className='margin'
                maxH={'300px'}
                bg={'primary.200'}
                mr={'1rem'}
                mt={-12}
                mx={-5}
                mb={10}
                pos={'relative'}>
                <a href={"https://github.com/JessicaLDaley/SQL-Employee-Tracker"}>
                  <Image
                    src={
                      tracker
                    }
                    layout={'fill'}
                  /></a>
              </Box>
              <Stack>
                <Heading
                  color='primary.100, white'
                  fontSize={'2xl'}
                  fontFamily={'body'}
                  mt="-4">
                  Employee Tracker 
                </Heading>
                <Text color={'primary.200'}>
                  MySQL, Express, Node.JS
                </Text>
              </Stack>
              <Stack mt={1} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars.githubusercontent.com/u/79805880?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Jessica Daley</Text>
                  <Link color="primary.400" href="https://github.com/JessicaLDaley/SQL-Employee-Tracker"><Text color="primary.400">View on GitHub</Text>
                    <ExternalLinkIcon mx='2px' color="primary.400" /></Link>
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


