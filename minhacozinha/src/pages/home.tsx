import { Stack, Image, Text, Flex, Box, Center } from "@chakra-ui/react";
import Cozinheiro from "../images/cozinheiro.png";

export default function Home() {
  return (
    <Stack mt={100}>
      <Center>
        <Flex>
          <Box>
            <Text fontSize="3xl">Olá, sou a Fátima,</Text>
            <Text fontSize="3xl">bem vindo(a) a minha cozinha!</Text>
          </Box>
          <Image w={500} src={Cozinheiro} alt="cozinheiro" />
        </Flex>
      </Center>
    </Stack>
  );
}
