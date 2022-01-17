import React from "react";
import "../styles.css";
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

    <Grid className="row2" templateRows='repeat(1, 1fr)' templateColumns='repeat(2, 1fr)' >
      <Stack>
        <GridItem>
          <Center justify={["center", "space-between", "flex-end", "flex-end"]}py={6}>
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
                    fontFamily={'body'}>
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
   
      
      {/* work #2 */}
      <Stack className="responsive">
        <GridItem>
          <Center>
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
                mt="7"
                overflow={'hidden'}>
                <Box
                  className='margin'
                  maxH={'300px'}
                  bg={'primary.200'}
                  mr={'1rem'}
                  mt={-12}
                  mx={-5}
                  mb={4}
                  pos={'relative'}>
                  <a href={"https://glacial-plains-14244.herokuapp.com/"}>
                    <Image
                      src={
                        'https://jessicaldaley.github.io/my-work/assets/images/pep.jpg'
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
      
      {/* work #3 */}
     
      <Stack className="responsive">
        <GridItem >
          <Center justifyContent="center" py={6}>
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
                  maxH={'350px'}
                  bg={'primary.200'}
                  mt={-6}
                  mx={-6}
                  mb={5}
                  pos={'relative'}>
                  <a href="https://michellewehr.github.io/MovieFoodie/">
                    <Image
                      src={"https://jessicaldaley.github.io/my-work/assets/images/moviefoodie.jpg"

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
{/* work #4 */}
      <Stack className="responsive">
        <GridItem>
          <Center>
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
                mt="1"
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
                        'https://jessicaldaley.github.io/my-work/assets/images/tracker.png'
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


