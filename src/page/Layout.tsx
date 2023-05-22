import { useState } from 'react';
import { AppShell, MediaQuery, Burger, useMantineTheme } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Barnav from '../components/Barnav';
import Head from '../components/Head';
import Headcontent from '../components/Headcontent';

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      layout='alt'
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={<Barnav opened={opened} />}
      header={
        <Head>
          <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size='sm'
              color={theme.colors.gray[6]}
              mr='xl'
            />
          </MediaQuery>

          <Headcontent />
        </Head>
      }
    >
      <Outlet />
    </AppShell>
  );
}
