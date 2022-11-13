import { Link } from 'react-router-dom'

import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'

const Login = () => {
  const [input, setInput] = useState({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box
      backgroundImage="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5c837aac7c42de1f9f125cff37ab2c70-1612076004546/fiverr-og-logo.png"
      h="700px"
      w="100%"
    >
      <form onSubmit={(e) => handleSubmit}>
        <Input placeholder="email..." margin="auto" w="250px" h="50px" />
        <Input placeholder="password..." margin="auto" w="250px" h="50px" />
        <Link to="/home">
          <Input type="submit" margin="auto" w="250px" h="50px" />
        </Link>
      </form>
    </Box>
  )
}

export default Login
