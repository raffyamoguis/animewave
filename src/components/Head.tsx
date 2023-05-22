import React from 'react';
import { Header } from '@mantine/core';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Head: React.FC<Props> = ({ children }) => {
  return (
    <Header height={{ base: 50, md: 70 }} p='md'>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {children}
      </div>
    </Header>
  );
};

export default Head;
