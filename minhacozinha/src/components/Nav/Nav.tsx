import { Stack, Button, Container } from "@chakra-ui/react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <Container
      as={Stack}
      maxW={"6xl"}
      py={4}
      spacing={4}
      justify={"center"}
      align={"center"}
    >
      <Stack direction={"row"} spacing={6}>
        <Link
          activeClass="active"
          to="inicio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button variant="ghost">Início</Button>
        </Link>
        <Link
          activeClass="active"
          to="pratos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button variant="ghost">Pratos</Button>
        </Link>
        <Link
          activeClass="active"
          to="contato"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button variant="ghost">Contato</Button>
        </Link>
        <Link
          activeClass="active"
          to="sobre"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button variant="ghost">Sobre</Button>
        </Link>
      </Stack>
    </Container>
  );
}

export default Nav;
