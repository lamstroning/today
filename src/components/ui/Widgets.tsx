import { Flex, Container, Card, List, ListItem, Heading } from "@chakra-ui/react";

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
            <Card.Root key={index} maxW="sm" overflow="hidden" my={4}>
              <Card.Header>
                <Heading size="md">{item.widgetsName}</Heading>
              </Card.Header>
              <Card.Body>
                <List.Root>
                  {Object.entries(info).map(([key, value]) => (
                    <List.Item key={key}>
                      {key}: {value}
                    </List.Item>
                  ))}
                </List.Root>
              </Card.Body>
            </Card.Root>
          );
        })}
      </Container>
    </Flex>
  );
};

export default Widgets;
