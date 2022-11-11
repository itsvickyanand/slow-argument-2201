import {
  Stack,
  HStack,
  VStack,
  Box,
  Image,
  Input,
  Text,
} from '@chakra-ui/react'
import { BellIcon, EmailIcon, TriangleDownIcon } from '@chakra-ui/icons'

const Stackit2 = ({ data }) => {
  return (
    <HStack h="80px" spacing="25px">
      <Box paddingLeft="20px" w="12%" h="40px">
        <Image
          src="https://mms.businesswire.com/media/20200909005347/en/819490/5/Fiverr_Logo_GreenGreen_RGB.jpg"
          alt="Dan Abramov"
          h="100%"
        />
      </Box>
      <Box w="60%" h="40px">
        <Input
          fontWeight="semibold"
          lineHeight="24px"
          fontFamily="400 16px/24px Macan,Helvetica Neue,Helvetica,Arial,sans-serif"
          fontSize="17px"
          color="#62646a"
          textDecoration="none"
          h="100%"
          placeholder="What service are you looking today?"
        />
      </Box>
      <Box w="70px" h="40px">
        <BellIcon />
      </Box>
      <Box w="70px" h="40px">
        <EmailIcon />
      </Box>
      <Box w="70px" h="40px">
        <TriangleDownIcon />
      </Box>
      <Box w="70px" h="40px">
        <Text
          fontWeight="semibold"
          lineHeight="24px"
          fontFamily="400 16px/24px Macan,Helvetica Neue,Helvetica,Arial,sans-serif"
          fontSize="17px"
          color="#62646a"
          textDecoration="none"
        >
          Orders
        </Text>
      </Box>
      <Box
        w="50px"
        marginRight="50px"
        borderRadius="100px"
        h="40px"
        bg="#6689EC"
      >
        <Text
          fontWeight="semibold"
          lineHeight="24px"
          fontFamily="400 16px/24px Macan,Helvetica Neue,Helvetica,Arial,sans-serif"
          fontSize="25px"
          color="white"
          textDecoration="none"
          paddingTop="10px"
        >
          V
        </Text>
      </Box>
    </HStack>
  )
}

export default Stackit2
