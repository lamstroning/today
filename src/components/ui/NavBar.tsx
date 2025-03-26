import { Flex, Container, Button } from '@chakra-ui/react'

const Navbar = ({ navList }) => {
    const buttons = navList.map((item) => (
    <Button key={item.url} variant="light">{item.name}</Button>
    ));

    return (
        <Flex flexDirection="row" justifyContent="space-between">
          <Container component="main-menu-name-page">
            Dashboard
          </Container>
          <Container component="main-menu-buttons">
            {buttons}
          </Container>
        </Flex>
    )
}

export default Navbar