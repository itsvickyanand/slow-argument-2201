import { Stack, HStack, VStack, Box } from '@chakra-ui/react'

import Boxit from './Box'

const Stackit = ({ data }) => {
  return (
    <HStack h="40px" spacing="">
      {data.map((ele) => (
        <Boxit title={ele.title} />
      ))}
    </HStack>
  )
}

export default Stackit
