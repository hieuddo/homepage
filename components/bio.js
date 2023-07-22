import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const NewsSection = styled(Box)`
  display: flex;
  align-items: flex-start;
  padding: 1em 0;
`

export const NewsDate = styled.span`
  font-weight: bold;
  margin-right: 1em;
  flex-shrink: 0;
`

export const NewsContent = styled.span`
  text-indent: 0;
`