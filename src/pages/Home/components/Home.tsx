'use client'

import { Flex, Container, Link, Button, Card, List } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex flexDirection="row" justifyContent="space-between" py={10} px={10} bg="white" color="grey">
      <Container component="left-menu" width="1/5" px={1}>
        <Container component="Logo" px={"5rem"}>
          <Link href="/" color="black" >Today</Link>
        </Container>
        <Container component="left-menu-links" width="4/5" py={'2rem'}>
          <Flex direction="column">
            <Button variant="light">Dashbord</Button>
            <Button variant="light">ToDo</Button>
            <Button variant="light">Finance</Button>
            <Button variant="light">Games</Button>
          </Flex>
        </Container>
      </Container>

      <Container component="main-menu">
        <Flex flexDirection="row" justifyContent="space-between">
          <Container component="main-menu-name-page">
            Dashboard
          </Container>
          <Container component="main-menu-buttons">
            <Button variant="light">Sign in</Button>
            <Button variant="light">Log in</Button>
            <Button variant="light">Settings</Button>
            <Button variant="light">Notifications</Button>
          </Container>
        </Flex>

        <Flex flexDirection="row" justify-content="flex-end">
          <Container component="main-menu-stats" py='2rem'>
            <Card.Root maxW="sm" overflow="hidden">
              <Card.Body gap="2">
                <Card.Title>My ToDo stats:</Card.Title>
                <Card.Description>
                  <List.Root>
                    <List.Item>Task created: 10</List.Item>
                    <List.Item> Task completed: 3</List.Item>
                    <List.Item>Task in work: 3</List.Item>
                    <List.Item>Task not started: 4</List.Item>
                  </List.Root>
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Container>

          <Container component="main-menu-stats" py='2rem'>
            <Card.Root maxW="sm" overflow="hidden">
              <Card.Body gap="2">
                <Card.Title>My ToDo stats:</Card.Title>
                <Card.Description>
                  <List.Root>
                    <List.Item>Task created: 10</List.Item>
                    <List.Item> Task completed: 3</List.Item>
                    <List.Item>Task in work: 3</List.Item>
                    <List.Item>Task not started: 4</List.Item>
                  </List.Root>
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Container>

        </Flex>

      </Container>
    </Flex>
  )
}

export default Navbar