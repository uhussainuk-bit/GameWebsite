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
                        Blog
                    </Heading>

                    <Text color="gray.300" fontSize={{ base: 'md', md: 'lg' }} maxW="800px">
                        Articles coming soon. We&apos;re preparing posts covering coffee origins, brewing methods,
                        behind-the-scenes stories, and product updates. This section will house all future blog
                        content once published.
                    </Text>

                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} maxW="700px">
                        Until then, feel free to explore the rest of the site or check back for updates.
                    </Text>
                </Flex>
            </Container>
        </Box>
    )
}
