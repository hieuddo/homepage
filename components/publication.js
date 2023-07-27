import { Box, Text } from '@chakra-ui/react'

const Publication = ({ paperName, authors, conferenceName, time }) => (
    <Box borderRadius="lg" overflow="hidden" p="4">
        <Text fontWeight="bold" fontSize="xl" mb="2">
            {paperName}
        </Text>
        <Text fontSize="md" mb="2">
            by {authors}
        </Text>
        <Text fontSize="md">
            {conferenceName}, {time}
        </Text>
    </Box>
)

export default Publication