import { Flex, Container, Card, List, ListItem, CardHeader, CardBody, Heading } from "@chakra-ui/react";

type Widget = {
  widgetsName: string;
  information?: Record<string, number | string>; // Optional для безопасности
};

type WidgetsProps = {
  widgetsList: Widget[];
};

const Widgets = ({ widgetsList }: WidgetsProps) => {
  console.log("WidgetsList:", widgetsList); // Логирование данных

  if (!widgetsList || widgetsList.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Container as="section" py="2rem">
        {widgetsList.map((item, index) => {
          const info = item.information || {};
          return (
            <Card key={index} maxW="sm" overflow="hidden" my={4}>
              <CardHeader>
                <Heading size="md">{item.widgetsName}</Heading>
              </CardHeader>
              <CardBody>
                <List>
                  {Object.entries(info).map(([key, value]) => (
                    <ListItem key={key}>
                      {key}: {value}
                    </ListItem>
                  ))}
                </List>
              </CardBody>
            </Card>
          );
        })}
      </Container>
    </Flex>
  );
};

export default Widgets;