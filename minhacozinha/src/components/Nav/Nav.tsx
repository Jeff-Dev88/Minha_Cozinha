import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";

function Nav() {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    return (
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue("sm", "sm-dark")}>
            <Container py={{ base: "4", lg: "5" }}>
                <HStack spacing="10" justify="space-between">
                    <Flex justify="space-between" flex="1">
                        <ButtonGroup variant="link" spacing="8">
                            <Button>Início</Button>
                            <Button>Receitas</Button>
                            <Button>Contato</Button>
                            <Button>Sobre</Button>
                        </ButtonGroup>
                    </Flex>
                </HStack>
            </Container>
        </Box>
    );
}

export default Nav;
