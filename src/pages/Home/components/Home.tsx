import { Button, HStack } from '@chakra-ui/react'
import { RiArrowRightLine, RiMailLine } from 'react-icons/ri'

const Home = () => {
  return (
    <HStack>
      <Button colorPalette="teal" variant="solid">
        <RiMailLine /> Email
      </Button>
      <Button colorPalette="teal" variant="outline">
        Call us <RiArrowRightLine />
      </Button>
    </HStack>
  )
}

export default Home
