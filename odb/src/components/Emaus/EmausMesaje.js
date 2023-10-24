import { Box, Text } from "@chakra-ui/react";

function EmausMesaje({message, author}) {
  return (
    <Box
    mx="40px" // Margini stânga și dreapta
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Text fontSize="lg">
        {message}
        <br/>
        {author}
      </Text>
    </Box>
  );
}

export default EmausMesaje;
