import React from 'react';
import { Group, ActionIcon } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandTwitter,
} from '@tabler/icons-react';

const support = [
  { icon: IconBrandGithub },
  { icon: IconBrandFacebook },
  { icon: IconBrandWhatsapp },
  { icon: IconBrandTwitter },
];

const Footercontent: React.FC = () => {
  return (
    <Group position='center'>
      {support.map((item, key) => (
        <ActionIcon key={key}>{<item.icon size='1.125rem' />}</ActionIcon>
      ))}
    </Group>
  );
};

export default Footercontent;
