import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Text,
} from '@chakra-ui/react'

const Menuit = ({ data }) => {
  return (
    <Menu>
      <MenuButton>
        <Text
          fontWeight="semibold"
          lineHeight="24px"
          fontFamily="400 16px/24px Macan,Helvetica Neue,Helvetica,Arial,sans-serif"
          fontSize="17px"
          color="#62646a"
          textDecoration="none"
        >
          {data}
        </Text>
      </MenuButton>
      <MenuList>
        <MenuItem>web development</MenuItem>
        <MenuItem>Digital Marketing</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
        <MenuItem>web development</MenuItem>
        <MenuItem>Digital Marketing</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
        <MenuItem>web development</MenuItem>
        <MenuItem>Digital Marketing</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Menuit
