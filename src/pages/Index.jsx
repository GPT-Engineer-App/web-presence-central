import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>
        <Box boxSize="150px" borderRadius="full" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTYyOTg3MjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" />
        </Box>
        <Box textAlign="center">
          <Text fontSize="md" color="gray.700">
            Hi, I'm John Doe, a passionate Full Stack Developer with experience in building web applications using modern technologies like React, Node.js, and more. I love to create efficient and scalable solutions.
          </Text>
        </Box>
        <HStack spacing={4}>
          <IconButton as="a" href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" />
          <IconButton as="a" href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          <IconButton as="a" href="https://twitter.com/johndoe" aria-label="Twitter" icon={<FaTwitter />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
