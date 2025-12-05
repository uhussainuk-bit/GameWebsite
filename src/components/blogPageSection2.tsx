import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

export default function Blog2() {
    return (
        <Box bg="gray.800" py={{ base: 8, md: 12 }} w="100%">
            <Container maxW="container.lg">
                <Flex direction="column" gap={4}>
                    <Heading
                        color="white"
                        fontSize={{ base: '3xl', md: '5xl' }}
                        letterSpacing="widest"
                    >
                        Turning Ancient History into Level Design
                    </Heading>

                    <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} maxW="800px">
                        Our puzzle rooms are inspired by architectural elements found in ancient Mediterranean, 
                        Middle Eastern, and North African civilisations. Instead of copying any historical site 
                        directly, we took broad influences—stone masonry patterns, chamber layouts, and ritual-themed 
                        environments—and shaped them into interactive puzzle spaces.
                    </Text>

                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} maxW="700px">
                        Every level is built around a micro-story: unlocking a sealed chamber, restoring energy to a 
                        forgotten mechanism, or navigating a labyrinth dedicated to ancient guardians. The inversion 
                        mechanic plays into each narrative beat, making puzzles feel like part of the temple rather 
                        than abstract challenges placed inside it.
                    </Text>
                </Flex>
            </Container>
        </Box>
    )
}
