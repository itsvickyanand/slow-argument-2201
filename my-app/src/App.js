import logo from './logo.svg'
import './App.css'
import {
  Menu,
  Button,
  ChevronDownIcon,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  color,
} from '@chakra-ui/react'

function App() {
  const action = () => {
    console.log('YOU HAVE HOVERED ME')
  }
  return (
    <div className="App">
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default App
