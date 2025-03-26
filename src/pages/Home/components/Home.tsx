'use client';

import { Flex, Container } from '@chakra-ui/react';
import AsideMenu from '../../../components/ui/AsideMenu';
import NavBar from '../../../components/ui/NavBar';
import Widgets from '../../../components/ui/Widgets';

const MenuButtons = [
  { name: "Dashboard", url: "/dashboard" },
  { name: "ToDo", url: "/todo" },
  { name: "Finance", url: "/finance" },
  { name: "Games", url: "/games" }
];

const NavList = [
  { name: "Sign in", url: "/Sign-in" },
  { name: "Log in", url: "/Log-in" },
  { name: "Settings", url: "/Settings" },
  { name: "Notifications", url: "/Notifications" }
];

const WidgetsList = [
  { widgetsName: "Task for you", information: { taskCreated: 5, taskCompleted: 1, taskInWork: 2, taskOpened: 2 } },
  { widgetsName: "Finance for you", information: { balance: 100, expenses: 10, earnings: 20 } },
  { widgetsName: "Games for you", information: { bestScore: 50, favoriteGames: "Tik Tak Toe", allPlays: 13 } },
];

const Navbar = () => {
  return (
    <Flex flexDirection="row" justifyContent="space-between" py={10} px={10} bg="white" color="grey">
      <AsideMenu menuButtons={MenuButtons} />
      <Container as="main">
        <NavBar navList={NavList} />
        <Widgets widgetsList={WidgetsList} />
      </Container>
    </Flex>
  );
};

export default Navbar;