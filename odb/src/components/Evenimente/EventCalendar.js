import React from "react";
import { Box, Text, Heading, Flex, Link, Icon } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarker, FaClock, FaInfo } from "react-icons/fa";

const EventCalendar = ({ date, title, time, venue, description }) => {
  return (
    <Flex borderWidth="1px" borderRadius="md" p={4} my={4} alignItems="center" style={{ marginLeft: '50px', marginRight: '50px'}}>
      <Box flex={1}>
        <Flex alignItems="center">
          <Icon as={FaCalendarAlt} mr={2} />
          <Text fontWeight="bold">{date}</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={FaClock} mr={2} />
          <Text>{time}</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={FaMapMarker} mr={2} />
          <Text>{venue}</Text>
        </Flex>
      </Box>
      <Box flex={3}>
        <Heading as="h3" size="md">
          <Link href="https://www.odbucuresti.ro/event/adunare-duminicala-3/" title={title} isExternal>
            {title}
          </Link>
        </Heading>
        <Text>{description}</Text>
      </Box>
      <Flex direction="column" align="center" justify="space-between">
        <Icon as={FaInfo} />
      </Flex>
    </Flex>
  );
};

export default EventCalendar;