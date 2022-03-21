import React from 'react';

import { Container, Spinner } from './styles'

const Loading: React.FC = () => {
  return (
    <Container>
      <Spinner />
      <span>Fetching Gihtub data...</span>
    </Container>
  );
}

export default Loading;