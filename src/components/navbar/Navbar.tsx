import { Flex } from '@chakra-ui/react'
import Navicon from './Navicon'
import Navlinks from './Navlinks'
import Profilemenu from './Profilemenu'
const Navbar = () => {
  return (
    <Flex
        h={'70px'}
        background={'red'}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={'10px'}
    >
        {/* platform logo */}
        <Navicon />
        {/* nav links */}
        <Navlinks />
        <Profilemenu />
    </Flex>
  )
}

export default Navbar