import Hero from "../components/heroSection";
import GameOfTheYearSection from "../components/GOTYSection";
import CallToActionSecion from "../components/ctaSection";
import VideoTrailerSection from "../components/trailerSection";
import MinimumRequirementsSection from "../components/minimumRequirementsSection";
import { Box, VStack } from '@chakra-ui/react'


export default function HomePage() {

  return (
    <>
      <Box pt="96px">

      <VStack gap={0}>
          <Hero />


          <GameOfTheYearSection />

          <CallToActionSecion/>

          <VideoTrailerSection/>



          <MinimumRequirementsSection/>


          <CallToActionSecion/>

    </VStack>
    </Box>
  </>
  )
}