import React from 'react';
import { Group, Text, ActionIcon, TextInput } from '@mantine/core';
import { IconBrightness, IconSearch } from '@tabler/icons-react';
import useRouteLocation from '../hooks/useRouteLocation';

const Headcontent: React.FC = () => {
  const routeName = useRouteLocation();
  return (
    <Group position='apart' sx={{ width: '100%' }}>
      <Text>{routeName}</Text>
      {routeName === 'Home' ? (
        <TextInput
          sx={{ width: '400px' }}
          placeholder='Look for anime'
          icon={<IconSearch size='0.8rem' />}
          variant='filled'
        />
      ) : null}
      <ActionIcon variant='transparent'>
        <IconBrightness />
      </ActionIcon>
    </Group>
  );
};

export default Headcontent;
