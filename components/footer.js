import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Jaime Hieu Do. All Rights Reserved.
      Template from <a href='https://www.craftz.dog/'>Takuya</a>
    </Box>
  )
}

export default Footer
