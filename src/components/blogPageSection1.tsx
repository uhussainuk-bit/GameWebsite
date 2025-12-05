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
                        Movement & Early Room Design
                    </Heading>

                    <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} maxW="800px">
                        In the early stages of developing <strong>Lost Society</strong>, our main priority was 
                        creating responsive first-person movement. Jumping, sprinting, and parkour mechanics form the 
                        backbone of the gameplay, so we focused heavily on making them smooth, predictable, and fun.
                    </Text>

                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} maxW="700px">
                        Once the movement system felt solid, we designed the introductory rooms. These areas guide the 
                        player through basic mechanics while establishing the mysterious atmosphere of the abandoned 
                        temple. The easy room introduces core actions without overwhelming the player, ensuring a smooth 
                        learning curve before the more complex challenges ahead.
                    </Text>
                </Flex>
            </Container>
        </Box>
    )
}
