import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaRoad, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="brand.700">
          Welcome to Road Explorer
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Discover the most amazing roads around the world. Whether you're planning a road trip or just love exploring, we've got you covered.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/road.jpg" alt="Scenic Road" borderRadius="md" />
        </Box>
        <Flex direction={["column", "row"]} spacing={4} mt={4}>
          <Button leftIcon={<FaInfoCircle />} colorScheme="teal" variant="solid" m={2}>
            Learn More
          </Button>
          <Button leftIcon={<FaPhone />} colorScheme="teal" variant="outline" m={2}>
            Contact Us
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;