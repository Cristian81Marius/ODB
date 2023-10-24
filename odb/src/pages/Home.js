import React from 'react';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Center,
  Container,
  ChakraProvider,
  Box
} from '@chakra-ui/react';
import ProjectSection from '../components/ProjectSection';
import Messagesection from '../components/MessageSection';
import GenerelInfoOD from '../components/GenerelInfoOD';


function Home() { 

  const projectData = [
  {
    imageSrc: 'https://www.odbucuresti.ro/wp-content/uploads/2023/05/emaus-profil.png',
    title: 'Centrul EMAUS',
    message: 'Scopul initiativei este de a oferi cazare gratuita persoanelor care au nevoie de tratament in Bucuresti, oferindu-le astfel un loc sigur si confortabil unde sa stea in timpul tratamentului',
    link: 'https://www.odbucuresti.ro/emaus/'
  },
  {
    imageSrc: 'https://www.odbucuresti.ro/wp-content/uploads/2023/05/1X-LOGO-CUTIE-ODB_2.jpg',
    title: 'Box of Blessings',
    message: 'Este un proiect care ofera lunar cutii alimentare gratuite persoanelor care se confrunta cu dificultati financiare, cutia contine alimente variabile si nutritive care ii ajuta sa depaseasca momentele dificile',
    link: 'https://www.odbucuresti.ro/bob/',
  },
  {
    imageSrc: 'https://www.odbucuresti.ro/wp-content/uploads/2023/05/Copy-of-Lucram-pentru-Imparatie.png',
    title: 'Școală biblică pentru copii',
    message: 'Copii primesc invataturi Biblice pentru a dezvolta un comportament pozitiv bazat pe iubire si respect. Prin activitati interactive copii descpora importanta valorilor morale si invata sa formeze legaturi puternice cu Dumnezeu si cei din jur',
    link: 'https://www.odbucuresti.ro/studiuCopii/'
  },
];
console.log(projectData)

  return (
    <>
    <br/>
    <br/>
    <Center>
      <Heading as="h2" size="xl">
        Proiectele noastre
      </Heading>
    </Center>
    <br/>
    <br/>
      <Flex justifyContent="center">

      {projectData.map((data, index) => (
        
        <ProjectSection
          key={index}
          imageSrc={data.imageSrc}
          title={data.title}
          message={data.message}
          link={data.link}
        />
      ))}
      </Flex>
      <br/>
    <br/>
      <Messagesection/>
      <br/>
    <br/>

    <GenerelInfoOD/>
    </>

  );
}

export default Home;