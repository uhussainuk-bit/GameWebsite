import { Box, Heading, Text, SimpleGrid, Image, VStack, Container } from '@chakra-ui/react'

export default function TeamIntroSection() {
  return (
    <Box w="full" bg="gray.900" pt={{ base: 6, md: 8 }} pb={{ base: 16, md: 20 }}>
      <Container maxW="container.lg">
        <VStack
          gap={10}
          h="100%"
          justify="center"
          align="center"
          color="white"
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            fontSize={{ base: '3xl', md: '5xl' }}
            letterSpacing="widest"
            textAlign={{ base: 'center', md: 'left' }}
          >
            The Team
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} w="100%" gap={{ base: 10, md: 16 }}>
            <VStack align="start" gap={4}>
              <Text fontSize={{ base: "md", md: "lg" }}>
                <strong>Lost Society</strong> is a first-person puzzle and parkour game developed as part of a
                university project. The game combines ancient temple environments with advanced science-lab spaces
                to create a mysterious, fast-paced experience.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }}>
                Our team is made up of students with different strengths across design, programming, level creation,
                project management, and presentation. Together we&apos;ve worked on room design, movement systems,
                puzzle mechanics, and the supporting website you&apos;re viewing now.
              </Text>

              <Text fontSize={{ base: "md", md: "lg" }}>
                Throughout development, we&apos;ve focused on clear communication and collaboration—using tools like
                GitHub and Jira to manage tasks and playtesting feedback. As the project grows, we aim to keep refining
                the gameplay, visuals, and user experience to deliver a polished final product.
              </Text>
            </VStack>

            <Box flex="1" textAlign="center" px={{ base: 0, md: 4 }}>
              <Image
                src="TheTeam.png"
                alt="Lost Society development team"
                objectFit="cover"
                borderRadius="md"
                maxW="100%"
                maxH="300px"
                mx="auto"
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

