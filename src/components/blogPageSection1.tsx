import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

export default function Blog1() {
    return (
        <Box bg="gray.800" py={{ base: 8, md: 12 }} w="100%">
            <Container maxW="container.lg">
                <Flex direction="column" gap={4}>
                    <Heading
                        color="white"
                        fontSize={{ base: '3xl', md: '5xl' }}
                        letterSpacing="widest"
                    >
                        Designing the Inversion Mechanic
                    </Heading>

                    <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} maxW="800px">
                        The core mechanic of <strong>Inversion</strong> is simple but powerful: ancient rooms 
                        within the ruins can shift between two states. Platforms rise, walls rotate, paths appear, 
                        and once-sealed sections become accessible. The challenge for us as developers was ensuring 
                        this dual-state system stayed readable and logical for the player.
                    </Text>

                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} maxW="700px">
                        To achieve this, we added clear visual markers to objects affected by inversion—allowing 
                        players to anticipate changes rather than rely on guesswork. Early prototypes revealed how 
                        easily puzzles could become overwhelming, so we refined the mechanic to keep each room’s 
                        inversion meaningful, intuitive, and satisfying to solve.
                    </Text>
                </Flex>
            </Container>
        </Box>
    )
}
