import { Box } from '@chakra-ui/react'
import Menuit from './Menu'

const Boxit = ({ title }) => {
  return (
    <Box w="12%" h="40px">
      <Menuit data={title} />
    </Box>
  )
}

export default Boxit
