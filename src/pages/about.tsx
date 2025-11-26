
import AboutSection from "../components/aboutSection";
import CallToActionSection from "../components/ctaSection";

import { Box } from '@chakra-ui/react'

export default function AboutPage() {
  return (
    <>
      <Box pt="96px">
        <AboutSection />
        <CallToActionSection />
      </Box>
    </>
  )
}