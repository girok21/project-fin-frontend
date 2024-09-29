import { Box, Flex } from "@chakra-ui/react"
import './Footer.styles.css'

const Footer = () => {
  return (
    <Flex
        className="footer-container"
        alignItems={'center'}
        flexDir={'column'}
    >
        <Box
          w={'95%'}
          h={'1px'}
          background={'grey'}
        />
        <span>
            Made with <span className="heart">❤️</span> in India
        </span>
    </Flex>
  )
}

export default Footer