import { Stack, Image } from "@chakra-ui/react";
import Cozinheiro from "../images/cozinheiro.png";

export default function Home() {
  return (
    <Stack mt={1000}>
      <Image w={500} mx="auto" src={Cozinheiro} alt="cozinheiro" />
    </Stack>
  );
}
