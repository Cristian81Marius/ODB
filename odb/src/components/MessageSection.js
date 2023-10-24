import React from 'react';
import { Box, Center, Heading, Image } from '@chakra-ui/react';

function MessageSection() {
  return (
    <Center>
      <Box w="40%" padding="20px" textAlign="center">
        <Center>
        <Image
          src="https://www.odbucuresti.ro/wp-content/uploads/2021/11/quotes.svg"
          alt="Quote Image"
        />
        </Center>
        <Heading as="h4" size="md">
          „În câmpul de război al mântuirii noastre sufletești nu sunt tratative de pace cu vrăjmașul diavol , cu patimile și ispitele lui. Cine începe aceste tratative a pierdut lupta mântuirii.”
        </Heading>
        <br/>
        <Center>
        <Image
          src="https://www.odbucuresti.ro/wp-content/uploads/2023/05/iosif-trifa-1442822259.jpg"
          alt="Iosif Trifa"
          boxSize="300px"
          objectFit="cover"
          borderRadius="full"
        />
        </Center>
        <Heading as="h5" size="sm">
          Preot Iosif Trifa
        </Heading>
      </Box>
    </Center>
  );
}

export default MessageSection;
