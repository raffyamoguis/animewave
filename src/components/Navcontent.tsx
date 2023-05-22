import React, { useState } from 'react';
import { IconHome, IconBrandCouchdb, IconSettings } from '@tabler/icons-react';
import { Box, NavLink, Text } from '@mantine/core';

const data = [
  { icon: IconHome, label: 'Home' },
  {
    icon: IconBrandCouchdb,
    label: 'Engine',
  },
  { icon: IconSettings, label: 'Settings' },
];

const Navcontent: React.FC = () => {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      key={item.label}
      active={index === active}
      label={<Text fz='md'>{item.label}</Text>}
      icon={<item.icon size='1.3rem' stroke={1.5} />}
      onClick={() => setActive(index)}
      color='orange'
      variant='subtle'
    />
  ));

  return <Box w={220}>{items}</Box>;
};

export default Navcontent;
