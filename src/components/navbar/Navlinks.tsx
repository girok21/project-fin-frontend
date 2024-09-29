import { Flex } from "@chakra-ui/react"
import Navicon from "./Navicon";

const Navlinks = () => {
    const linksLis: Array<string> = ['Dashboard', 'Bank', 'Portfolio', 'News'];
    // Later each nav link will have a customized icon based on its function.  
    return (
        <Flex gap={'10px'}>
            {linksLis.map(() => <Navicon />)}
        </Flex>
    )
}

export default Navlinks