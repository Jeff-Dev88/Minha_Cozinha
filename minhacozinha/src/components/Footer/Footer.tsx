import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Button,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import LogoCozinha from "../../images/logo.png";
import { Link } from "react-scroll";

const Logo = () => {
  return <Image w={50} src={LogoCozinha} alt="logo" />;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bgGradient="linear(to-b, yellow.200, purple.400, purple.500)">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
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

      <Box
        borderTopWidth={0}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          pb={5}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Minha Cozinha. Todos os direitos reservados.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
