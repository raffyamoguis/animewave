import React from 'react';
import { Navbar, Text } from '@mantine/core';
import Navcontent from './Navcontent';
import Footercontent from './Footercontent';

interface Props {
  opened: boolean;
}

const Barnav: React.FC<Props> = ({ opened }) => {
  return (
    <Navbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section>
        <Text fz='xl'>AnimeWave</Text>
      </Navbar.Section>
      <Navbar.Section mt='xl' mx='-xs' px='xs' grow>
        <Navcontent />
      </Navbar.Section>
      <Navbar.Section>
        <Footercontent />
      </Navbar.Section>
    </Navbar>
  );
};

export default Barnav;
