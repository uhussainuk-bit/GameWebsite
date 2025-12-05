import { Box, Heading, Text, Container, Flex } from '@chakra-ui/react'

export default function TheTeamSection() {
  return (
    <Box bg="black" py={{ base: 10, md: 20 }} w="100%">
      <Container maxW="container.lg">
        <Heading
          color="white"
          mb={12}
          textAlign="center"
          fontSize={{ base: '2xl', md: '4xl' }}
        >
          Meet The Team
        </Heading>

        <Flex wrap="wrap" justify="center" gap={8}>

          {/* Toby */}
          <Box bg="gray.800" borderRadius="md" p={6} color="white" w={{ base: '100%', md: '45%' }}>
            <Heading fontSize="xl" mb={2}>Toby</Heading>
            <Text fontWeight="semibold" mb={2}>Team Lead & Level Design</Text>
            <Text fontSize="sm">
              Provided overall team leadership and vision, co-designed the Easy Tomb Room, 
              and supported the technical direction of the project.
            </Text>
          </Box>

          {/* Karanveer */}
          <Box bg="gray.800" borderRadius="md" p={6} color="white" w={{ base: '100%', md: '45%' }}>
            <Heading fontSize="xl" mb={2}>Karanveer</Heading>
            <Text fontWeight="semibold" mb={2}>Project Management & Puzzle Design</Text>
            <Text fontSize="sm">
              Managed GitHub and Jira boards, coordinated team tasks, and developed key puzzle
              challenges for the harder rooms.
            </Text>
          </Box>

          {/* Dylan / Dillon Turner */}
          <Box bg="gray.800" borderRadius="md" p={6} color="white" w={{ base: '100%', md: '45%' }}>
            <Heading fontSize="xl" mb={2}>Dillon Turner</Heading>
            <Text fontWeight="semibold" mb={2}>Core Movement & Systems Programming</Text>
            <Text fontSize="sm">
              Implemented the core first-person movement mechanics and helped build the technical
              systems that power the puzzle and room interactions.
            </Text>
          </Box>

          {/* Usman */}
          <Box bg="gray.800" borderRadius="md" p={6} color="white" w={{ base: '100%', md: '45%' }}>
            <Heading fontSize="xl" mb={2}>Usman</Heading>
            <Text fontWeight="semibold" mb={2}>Level Design & Web Development</Text>
            <Text fontSize="sm">
              Co-designed the Easy Tomb Room layouts and contributed to the implementation of the
              project website and UI.
            </Text>
          </Box>

          {/* Umar */}
          <Box bg="gray.800" borderRadius="md" p={6} color="white" w={{ base: '100%', md: '45%' }}>
            <Heading fontSize="xl" mb={2}>Umar</Heading>
            <Text fontWeight="semibold" mb={2}>Website, UI & Documentation</Text>
            <Text fontSize="sm">
              Supported website development, helped refine the user interface, and handled 
              documentation, analysis, and written material for the project.
            </Text>
          </Box>

          {/* Natasha */}
          <Box bg="gray.800" borderRadius="md" p={6} color="white" w={{ base: '100%', md: '45%' }}>
            <Heading fontSize="xl" mb={2}>Natasha Parker</Heading>
            <Text fontWeight="semibold" mb={2}>Presentation & Player Experience</Text>
            <Text fontSize="sm">
              Helped structure the presentation flow, contributed to the business and narrative
              framing of the game, and supported decisions around player experience.
            </Text>
          </Box>

          {/* Rajan */}
          <Box bg="gray.800" borderRadius="md" p={6} color="white" w={{ base: '100%', md: '45%' }}>
            <Heading fontSize="xl" mb={2}>Rajan</Heading>
            <Text fontWeight="semibold" mb={2}>Documentation & Analysis</Text>
            <Text fontSize="sm">
              Assisted with project documentation, analysis of gameplay features, and supported
              the technical and web sections of the project.
            </Text>
          </Box>

        </Flex>
      </Container>
    </Box>
  )
}
