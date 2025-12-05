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
                        Designing Themed Rooms: From Temples to Science Labs
                    </Heading>

                    <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} maxW="800px">
                        The world of <strong>Lost Society</strong> is built around a contrast between ancient 
                        civilisation architecture and high-tech scientific environments. The medium and hard rooms 
                        expand on this theme by introducing puzzles powered by pressure plates, activation switches, 
                        light-based triggers, and environmental hazards.
                    </Text>

                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} maxW="700px">
                        Each room is crafted to teach or reinforce a mechanic. Players gradually move from simple 
                        object interactions to more layered challenges requiring timing, movement precision, and 
                        environmental awareness. This progression keeps the experience engaging, rewarding, and 
                        consistent with the narrative of uncovering forgotten secrets.
                    </Text>
                </Flex>
            </Container>
        </Box>
    )
}
