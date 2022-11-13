import logo from './logo.svg'
import './App.css'
import Stackit from './navComponents/Stack'
import Stackit2 from './nav2Components/Stack'
import { Stack, HStack, VStack, Box, StackDivider } from '@chakra-ui/react'
import Dabba from './boxes/Dabba'
import Tableit from './footer/Footer'

const data = [
  { title: 'Graphics & Design' },
  { title: 'Digital Marketing' },
  { title: 'Writing & Translation' },
  { title: 'Video & Animation' },
  { title: 'Music & Audio' },
  { title: 'Programming & Tech' },
  { title: 'Business' },
  { title: 'Lifestyle' },
  { title: 'Trending' },
]

function App() {
  return (
    <div className="App">
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={5}
        align="stretch"
      >
        <Box h="70px">
          <Stackit2 />
        </Box>
        <Box h="40px">
          <Stackit data={data} />
        </Box>
        <StackDivider borderColor="gray.200" />
      </VStack>
      <Dabba />
      <Tableit />
    </div>
  )
}

export default App
