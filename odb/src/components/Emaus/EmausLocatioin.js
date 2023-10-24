import { Box, Text, Image, Link, Button } from "@chakra-ui/react";

function EmausLocatioin({ imageUrl, location, description, title }) {
  return (
    <Box
      bgImage={`url('${imageUrl}')`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      w="100%"
      h="300px" // Ajustați înălțimea la dimensiunea dorită
      borderRadius="lg"
      p={6}
      boxShadow="md"
    >
      <Box
        bg="rgba(255, 255, 255, 0.8)"
        p={4}
        borderRadius="lg"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
        w="70%" // Lățimea chenarului
        h="60%" // Înălțimea chenarului
        m="auto" // Margin: auto pentru a centra chenarul
      >
        <Text fontSize="xl" fontWeight="bold">
          {location}
        </Text>
        <Text textAlign="center">
          {description}
        </Text>
        <Link
          href={imageUrl}
          tabIndex="0"
          bg="#716059"
          color="white"
          p={2}
          borderRadius="lg"
          textDecoration="none"
          _hover={{ bg: "#5a523d" }}
        >
          {title}
        </Link>
      </Box>
    </Box>
  );
}

export default EmausLocatioin;
