import { Box, Heading, Text, SimpleGrid, Image, VStack, Container } from '@chakra-ui/react'

export default function AboutSection() {
  return (
    <Box w="full" bg="black" py={{ base: 12, md: 20 }}>
      <Container maxW="container.lg">
        <VStack gap={10} h="100%" justify="center" align="center" color="white" textAlign={{ base: 'center', md: 'left' }}>
          <Heading fontSize={{ base: '3xl', md: '5xl' }} letterSpacing="wider" textAlign="center">
            About the Game
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} w="100%" gap={{ base: 10, md: 16 }}>
            <VStack align="start" gap={4}>
              <Text fontSize={{ base: 'md', md: 'lg' }}>
                <strong>Lost Society</strong> is a fast-paced first-person puzzle and parkour adventure set across ancient temples 
                and advanced scientific laboratories. Players awaken with no memory and must navigate a series of themed rooms 
                filled with environmental challenges and interactive puzzle mechanisms.
              </Text>

              <Text fontSize={{ base: 'md', md: 'lg' }}>
                Built in Unity, the game focuses on responsive movement—sprinting, jumping, platforming—and meaningful puzzle 
                interactions, including pressure plates, activation switches, and timed obstacle sequences. Each room is designed 
                to gradually increase difficulty, guiding the player from simple introductory areas toward complex, skill-based challenges.
              </Text>

              <Text fontSize={{ base: 'md', md: 'lg' }}>
                Lost Society is currently in active development, with a strong focus on polished gameplay, stable transitions, 
                intuitive UI, and a clear progression system. Future updates will expand the room variety, refine mechanics, 
                and introduce additional narrative elements as the mystery of the forgotten society unfolds.
              </Text>
            </VStack>

            <Box flex="1" textAlign="center">
              <Image
                src="LostSocietyTitle.png"
                alt="Lost Society Concept Art"
                objectFit="cover"
                borderRadius="md"
                maxW={{ base: '100%', md: '400px' }}
                mx="auto"
              />
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}
