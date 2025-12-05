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
                        Playtesting, Balance & Accessibility Improvements
                    </Heading>

                    <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} maxW="800px">
                        Early playtesting sessions helped us understand how players interacted with the inversion 
                        mechanic. Some testers didn’t immediately notice when the room changed state, which made 
                        certain puzzles feel confusing or unfair. This feedback shaped our next development sprint.
                    </Text>

                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} maxW="700px">
                        We improved clarity by enhancing visual and audio cues, adding colour-shifted elements, 
                        and introducing slight camera motion during inversion. Accessibility was another key focus— 
                        simplifying control schemes, reducing unnecessary visual noise, and ensuring puzzle clues 
                        weren't solely colour-dependent. These refinements made the gameplay smoother, fairer, and 
                        more enjoyable for a wider range of players.
                    </Text>
                </Flex>
            </Container>
        </Box>
    )
}
