import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const ProjectSection = ({imageSrc, title, message, link }) => {
  return (
    <Box
          w="33.33%"
          textAlign="center"
          padding="20px"
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSrc}
            alt={title}
            width="100%"
            _hover={{ 
              transform: 'scale(1.1)',
              transition: 'transform 0.3s ease'
            }}
          />
          </a>
          <Text fontSize="xl" fontWeight="bold" marginY="1rem">
            {title}
          </Text>
          <Text>
            {message}
          </Text>
        </Box>
  );
};

export default ProjectSection;