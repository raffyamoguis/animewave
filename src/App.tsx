import { MantineProvider, Text } from '@mantine/core';
import Layout from './page/Layout';

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Roboto, sans-serif',
        headings: { fontFamily: 'Roboto, sans-serif' },
      }}
    >
      <Layout />
    </MantineProvider>
  );
}
