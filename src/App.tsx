import { Flex } from "@chakra-ui/react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <Flex
      w={'100vw'}
      minH={'100vh'}
      flexDir={'column'}
      justifyContent={'space-between'}
    >
      <Navbar />
      <Footer />
    </Flex>
  )
}

export default App
