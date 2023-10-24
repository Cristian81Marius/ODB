import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logo from '../images/logo.png'
import background from '../images/bucharest_2-1.png'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  const NAV_ITEMS = [
    {
      label: 'Evenimente',
      href: '/events',
    },
    {
      label: 'Contacteaza-ne',
      href: '/contact_us',
    },
    {
      label: 'Proiecte',
      href: '/projects',
    },
    {
        label: 'Despre noi',
        href: '/about_us',
      },
  ];

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover', // Ajustați la dimensiunile dorite
    backgroundPosition: 'center center', // Ajustați poziția dorită
  };

  return (
    <Box>
      <Flex
        bg="#e3decf"
        color="white"
        minH={'500px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        style={backgroundStyle}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            role="button"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'top', md: 'start' }}>
        <Box as={Link} to='/'><Image src={logo} style={{ width: 80, height: 80 }}/></Box>
          <Flex display={{ base: 'none', md: 'flex' }} position="absolute" left="auto" top={7} right={3} ml={10} >
            <DesktopNav navItems={NAV_ITEMS} />
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
            <MobileNav navItems={NAV_ITEMS}/>
        </Collapse>
      </Flex>

      
    </Box>
  );
}

const DesktopNav = ({ navItems }) => {
  return (
    <Stack direction={'row'} spacing={4}>
      {navItems.map(navItem => (
        <Box key={navItem.label}>
          <Box
            as={Link}
            p={2}
            to={navItem.href}
            fontSize={23}
            fontWeight={600}
            color="white"
            _hover={{
              textDecoration: 'none',
              color: 'gray.200',
            }}
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = ({ navItems}) => {
  return (
    <Stack bg="#abaaa9" p={4} display={{ md: 'none' }} direction="column" spacing={8} align="">
      <Stack spacing={4} align="center" width="100%">
        {navItems.map((navItem) => (
          <Box
            key={navItem.label}
            py={2}
            as={Link}
            to={navItem.href}
            fontSize="md"
            fontWeight="bold"
            color="white"
            textAlign="center"
            w="100%"
          >
            {navItem.label}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
