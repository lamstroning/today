import { Flex, Container, Link, Button } from '@chakra-ui/react';

const AsideMenu = ({ menuButtons }) => {
  const listButtons = menuButtons.map((item) => (
    <Button key={item.url} variant="light">
      {item.name}
    </Button>
  ));

  return (
    <Container as="aside" width="1/5" px={1}>
      <Container as="div" px={"5rem"}>
        <Link href="/" color="black">Today</Link>
      </Container>
      <Container as="nav" width="4/5" py={'2rem'}>
        <Flex direction="column">
          {listButtons}
        </Flex>
      </Container>
    </Container>
  );
};

export default AsideMenu;