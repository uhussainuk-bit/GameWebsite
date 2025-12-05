import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

export default function Blog3() {
    return (
        <Box bg="gray.800" py={{ base: 8, md: 12 }} w="100%">
            <Container maxW="container.lg">
                <Flex direction="column" gap={4}>
                    <Heading
                        color="white"
                        fontSize={{ base: '3xl', md: '5xl' }}
                        letterSpacing="widest"
                    >
                        Polishing Gameplay & Player Feedback
                    </Heading>

                    <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} maxW="800px">
                        After completing the core rooms, we shifted focus towards polishing gameplay and ensuring a 
                        stable player experience. Playtesting revealed key improvements we needed to make, such as 
                        refining movement sensitivity, smoothing level transitions, and improving visual clarity in dark 
                        areas of the temple.
                    </Text>

                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} maxW="700px">
                        We also enhanced UI elements, adjusted puzzle timing, and ensured all room-unlock systems behaved 
                        consistently. Stability became a major goal—removing bugs, tightening physics interactions, and 
                        optimising lighting and scripts. These changes resulted in a more seamless experience that feels 
                        polished and ready for players to explore.
                    </Text>
                </Flex>
            </Container>
        </Box>
    )
}
