// import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

// Replace the NewsSection with a table
export const NewsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

// Style for the table rows
export const TableRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f2f2f2;
  }
`

// Style for the table cells (td)
export const TableCell = styled.td`
  padding: 0.5em;
  border: 1px solid #ccc;
`

// Style for the date cell
export const DateCell = styled(TableCell)`
  font-weight: bold;
`
