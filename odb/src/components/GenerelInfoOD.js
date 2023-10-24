import React from 'react';
import { Box, Button, Center, Heading, Image, Link } from '@chakra-ui/react';

const GenerelInfoOD = () => {
  return (
    <Center>
      <Box w="50%" padding="20px" textAlign="center">
        <Heading as="h1" size="md">
          Ce este Oastea Domnului ?
        </Heading>
        <Box>
          <p>
            Oastea Domnului este o mișcare religioasă creștină care își propune să ofere un cadru în care oamenii să poată experimenta și împărtăși credința lor într-un mod profund și autentic. Prin intermediul rugăciunii, slujirii și comunității, participanții în Oastea Domnului găsesc inspirație, susținere și îndrumare în călătoria lor spirituală. Este un spațiu în care valorile creștine și trăirea evangheliei sunt încurajate și puse în practică, contribuind la creșterea și dezvoltarea personală a membrilor.
          </p>
        </Box>
        <Link href="https://www.odbucuresti.ro/oastea_domnului/" fontSize="sm">
            <Button>Află mai multe</Button>
          
        </Link>
      </Box>
      <Box w="50%" padding="20px" textAlign="center">
        <Image
          src="https://www.odbucuresti.ro/wp-content/uploads/2023/05/Untitled-design.png"
          alt=""
          objectFit="cover"
          borderRadius="md" // You can adjust the roundness with different values
        />
      </Box>
    </Center>
  );
};

export default GenerelInfoOD;
