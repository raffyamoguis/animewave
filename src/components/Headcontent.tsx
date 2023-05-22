import React from 'react';
import { Group, Text } from '@mantine/core';
// import { useLocation } from 'react-router-dom';
import useRouteLocation from '../hooks/useRouteLocation';

const Headcontent: React.FC = () => {
  const routeName = useRouteLocation();
  return (
    <Group position='apart'>
      <Text>{routeName}</Text>
    </Group>
  );
};

export default Headcontent;
