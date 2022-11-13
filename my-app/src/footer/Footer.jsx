import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

const Tableit = () => {
  return (
    <TableContainer marginTop="50px" marginBottom="50px">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Categories</Th>
            <Th>About</Th>
            <Th isNumeric>Support</Th>
            <Th>Community</Th>
            <Th>More From Fiverr</Th>
            <Th>Support</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Graphics & Design</Td>
            <Td>Digitial</Td>
            <Td>Writing & Translation</Td>
            <Td>Vidoe & Animation</Td>
            <Td> Audio</Td>
            <Td>Programming & Tech</Td>
          </Tr>
          <Tr>
            <Td>Graphics & Design</Td>
            <Td>Digitial Marketing</Td>
            <Td>Blog </Td>
            <Td>Vidoe & Animation</Td>
            <Td>Audio</Td>
            <Td>Programming </Td>
          </Tr>
          <Tr>
            <Td>Graphics & Design</Td>
            <Td>Digitial Marketing</Td>
            <Td>Writing </Td>
            <Td>Vidoe & Animation</Td>
            <Td>Music & Audio</Td>
            <Td>Programming & Tech</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Td>Graphics & Design</Td>
            <Td>Digitial </Td>
            <Td>Audio</Td>
            <Td>Vidoe & Animation</Td>
            <Td>Music & Audio</Td>
            <Td>Tech</Td>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

export default Tableit
