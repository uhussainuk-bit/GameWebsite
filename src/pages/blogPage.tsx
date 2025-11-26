
import { Box } from '@chakra-ui/react'
import Blog1 from "../components/blogPageSection1";
import Blog2 from "../components/blogPageSection2";
import Blog3 from "../components/blogPageSection3";

export default function BlogPage() {
  return (
    <>
      <Box pt="96px">
              <Blog1 />
              <Blog2 />
              <Blog3 />


      </Box>
    </>
  )
}